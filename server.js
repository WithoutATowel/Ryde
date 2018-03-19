require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


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

app.post('/bigsearch', (req, res, next) =>{
  console.log(req.body);
  res.send('data stuff hopefully')
  // Trip.find({
  //   time: req.body.zip
  // }, function(err, trips){
  //   console.log(trips)
  //   if(err){
  //     console.log(err);
  //     res.send(err);
  //   } else {
  //     console.log(trips);
  //     res.send(trips);
  //   }
  // })
})

app.use('/auth', auth);



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
