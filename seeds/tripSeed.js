var mongoose = require('mongoose');
var Trips = require('../models/trips');
var User = require('../models/user');

mongoose.connect('mongodb://localhost/ryde');

var trips = [
  {
    rydeName: 'Portland',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'wendys',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: false,
    reoccurringDays: [],
    cost: 15,
    pets: true,
    seats: 3,
    comments:['professional', 'drives well', 'bad taste in music'],
    costBreakdown: "charity donation to my church",
    smoking: true,
  },
  {
    rydeName: 'Seattle',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday', 'thursday'],
    cost: 12,
    pets: true,
    seats: 4,
    comments:['loves his self', 'talks in third person to much'],
    costBreakdown: "charity donation to my church"
  },
  {
    rydeName: 'San Francisco',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'mcdonalds',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday', 'monday'],
    cost: 10,
    pets: true,
    seats: 4,
    comments:['professional', 'has money'],
    costBreakdown: "my kids school money"
  },
  {
    rydeName: 'Olympia',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['sunday', 'saturday'],
    cost: 5,
    pets: true,
    seats: 1,
    comments:['pretty girl', 'big brat'],
    costBreakdown: "gas money and parking"
  },
  {
    rydeName: 'Everett',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'kitty',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday'],
    cost: 25,
    pets: false,
    seats: 2,
    comments:['horrible ride', 'dipshit person'],
    costBreakdown: "gas money"
  }

];

User.find({}, (err, users) => {
  users.forEach((user, index) => {
    let trip = trips[index];
    trip['driverId'] = user._id;

    let denied = users[Math.floor(5*Math.random())]._id;
    while(denied === user._id){
      denied = users[Math.floor(5*Math.random())]._id;
    }
    trip['deniedRiders'] = [denied];

    let rider = users[Math.floor(5*Math.random())]._id;
    while(denied === rider || user._id === rider){
      rider = users[Math.floor(5*Math.random())]._id;
    }
    trip['ridersId'] = [rider]

    let prider = users[Math.floor(5*Math.random())]._id;
    while(denied === prider || user._id === prider || rider === prider){
      prider = users[Math.floor(5*Math.random())]._id;
    }
    trip['pendingRiders'] = [prider]
    trip['carType'] = user.car
    var newTrip = new Trips(trip);
    newTrip.save();
    console.log('done')
  })
})

  //Need to figure out if I should use ("new Trips or new Trip") in the loop
    // for(let trip of trips){
    //   var newTrip = new Trips(trip);
    //   newTrip.save();
    // }


// var userSeed = require('../seeds/userSeed')
// var tripSeed = require('../seeds/tripSeed')
// app.get('/users/seed',  userSeed.seedUsers, tripSeed.seedTrips);
