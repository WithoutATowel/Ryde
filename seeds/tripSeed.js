var mongoose = require('mongoose');
var Trips = require('../models/trips');
var User = require('../models/user');

mongoose.connect('mongodb://localhost/ryde');

var trips = [
  {
    rydeName: 'Portland',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday'],
    cost: 12,
    pets: true,
    carType: 'truimph motorcycle',
    seats: 4
  },
  {
    rydeName: 'Seattle',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday'],
    cost: 12,
    pets: true,
    carType: 'maserti',
    seats: 4
  },
  {
    rydeName: 'San Francisco',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday'],
    cost: 12,
    pets: true,
    carType: 'maserti',
    seats: 4
  },
  {
    rydeName: 'Olympia',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday'],
    cost: 12,
    pets: true,
    carType: 'maserti',
    seats: 4
  },
  {
    rydeName: 'Everett',
    startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
    endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
    departDate: 1525170120000,
    reoccurring: true,
    reoccurringDays: ['friday'],
    cost: 12,
    pets: true,
    carType: 'maserti',
    seats: 4
  }

];

User.find({}, (err, users) => {
  users.forEach((user, index) => {
    let trip = trips[index];
    trip['driverId'] = user._id;
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
