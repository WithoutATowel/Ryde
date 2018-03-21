require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var User = require('./models/user');
var Trip = require('./models/trips');
var lowerCase = require('./middleware/toLowerCase');
var ObjectId = require('mongoose').Types.ObjectId;


// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ryde');  // change db name here

// var index = require('./routes/index');
// var users = require('./routes/users');
var auth = require('./routes/auth');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Do we still need this?
app.use(function(req, res, next) {
  // before every route, attach the flash messages and current user to res.locals
  res.locals.currentUser = req.user;
  next();
});


app.get('/finduser/:id', (req, res, next) => {
  User.findOne({_id: req.params.id}, function(err, user) {
    if (user) {
      res.json(user.toObject())
    } else {
      res.status(420).json({
        error: true,
        message: 'Cant find user id'
      })
    }
  })
})

app.post('/bigsearch', (req, res, next) =>{
  let body = lowerCase(req.body)

  var searchOptions = {
    'startAddress.zip': body.zip,
    'startAddress.city': body.sCity,
    'endAddress.city': body.eCity,
    departDate: {$gte: body.sTime},
    pets: body.pets,
    cost: {$lte: body.cost},
    reoccurring: body.reoccur,
    seats: body.seat
  }
  console.log(searchOptions.cost);
  for (let key in searchOptions) {
    if (searchOptions[key] === '' || searchOptions[key] === false || searchOptions[key]['$lte'] === undefined || searchOptions[key]['$gte'] === undefined) {
      delete searchOptions[key]
    }
  }
  console.log(searchOptions);
  Trip.find(searchOptions, function(err, trips){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      // console.log(trips);
      res.send(trips);
    }
  })
})

app.post('/minisearch', (req,res,next) =>{
  let bodh = req.body
  var miniSearchObj ={
    'startAddress.zip': bodh.startZip,
    'endAddress.zip': bodh.endZip,
    departDate: {$gte: bodh.date}
  }
  for(let key in miniSearchObj){
    if (miniSearchObj[key] === '' || miniSearchObj[key] === false) {
      delete miniSearchObj[key]
    }
  }
  console.log(miniSearchObj);
  Trip.find(miniSearchObj, function(err, trips){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      console.log(trips);
      res.send(trips);
    }
  })
})

app.get('/mydryves/:id', (req, res, next) => {
  var searchOptions = {
    driverId: ObjectId(req.params.id)
  }

  Trip.find(searchOptions, function(err, trips) {
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.send(trips);
    }
  })
})

app.post('/mydryves', (req, res, next) => {
  console.log('Hit POST /mydryves route');
  let { userId, tripId, action } = req.body;
  Trip.findById(tripId, function (err, trip) {
    User.findById(userId, function (err, user) {
      let message = '';
      if(action === 'approve') {
        trip.ridersId.push(userId);
        trip.pendingRiders.splice(trip.pendingRiders.indexOf(userId),1);
        user.setTrips.push(tripId);
        user.pendingTrips.splice(user.pendingTrips.indexOf(tripId),1);
        message = 'Approved the user!';
      } else if (action === 'reject') {
        trip.deniedRiders.push(userId);
        trip.pendingRiders.splice(trip.pendingRiders.indexOf(userId),1);
        user.deniedTrips.push(tripId);
        user.pendingTrips.splice(user.pendingTrips.indexOf(tripId),1);
        message = 'Denied the user!';
      }
      trip.save(function (err, updatedTrip) {
        user.save(function (err, updatedUser) {
          res.send(message);
        });
      });
    });
  });
});

app.get('/myrydes/:id', (req, res, next) => {
  console.log('Hit GET /myrydes route');
  var searchOptions = [
    { pendingRiders: req.params.id },
    { ridersId: req.params.id }
  ];
  Trip.find({ $or: searchOptions }, function(err, trips) {
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.send(trips);
    }
  })
})

//TODO refactor this to be more like POST /mydryves
app.post('/myrydes', (req, res, next) => {
  console.log('Hit POST /myrydes route');
  let { userId, tripId } = req.body;
  Trip.findById(tripId, function (err, trip) {
    User.findById(userId, function (err, user) {
      if(trip.driverId === ObjectId(userId)) {
        // THIS DOESN'T WORK YET
        res.send("You're the driver for this trip!");
      } else if(trip.deniedRiders.includes(userId)) {
        // User has already been denied for ride.
        res.send('Sorry! The driver has rejected your request.');
      } else if (trip.ridersId.includes(userId)) {
        // User has already been approved for ride, so they must want to remove it.
        trip.ridersId.splice(trip.ridersId.indexOf(userId),1);
        user.setTrips.splice(user.setTrips.indexOf(tripId),1);
        trip.save(function (err, updatedTrip) {
          user.save(function (err, updatedUser) {
            res.send('Removed user from approved riders');
          });
        });
      } else if(trip.pendingRiders.includes(userId)) {
        // User is already pending for ride, so they must want to remove it.
        trip.pendingRiders.splice(trip.pendingRiders.indexOf(userId),1);
        user.pendingTrips.splice(user.pendingTrips.indexOf(tripId),1);
        trip.save(function (err, updatedTrip) {
          user.save(function (err, updatedUser) {
            res.send('Removed user from pending riders');
          });
        });
      } else {
        trip.pendingRiders.push(userId);
        user.pendingTrips.push(tripId);
        trip.save(function (err, updatedTrip) {
          user.save(function (err, updatedUser) {
            res.send('Added user to pending riders');
          });
        });
      }
    });
  });
})

app.post('/postARyde', (req, res, next) => {
  let reqBody = lowerCase(req.body)
  console.log('Hit POST /postARyde route');
  console.log(reqBody)
  Trip.create(reqBody, function(err, ryde) {
    if (err) {
      console.log("GOT AN ERROR CREATING THE RYDE", err)
    } else {
      res.json({ryde})
    }
  })
})

app.use('/auth', auth);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
