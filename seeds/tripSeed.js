var mongoose = require('mongoose');
var Trips = require('../models/trips');

mongoose.connect('mongodb://localhost/ryde');



    var trips = [
      {
        driverId: 1,
        start: '1130 14th ave',
        end: 'taco time',
        departTime: 1200,
        reocurring: true,
        reocurringDays: ['friday'],
        cost: 12,
        pets: true,
        carType: 'truimph motorcycle',
        seats: 4
      },
      {
        driverId: 2,
        start: 'ballard st',
        end: 'taco time',
        departTime: 1200,
        reocurring: true,
        reocurringDays: ['friday'],
        cost: 12,
        pets: true,
        carType: 'maserti',
        seats: 4
      },
      {
        driverId: 3,
        start: 'West st',
        end: 'taco time',
        departTime: 1200,
        reocurring: true,
        reocurringDays: ['friday'],
        cost: 12,
        pets: true,
        carType: 'maserti',
        seats: 4
      },
      {
        driverId: 4,
        start: 'fun as fuck st',
        end: 'taco time',
        departTime: 1200,
        reocurring: true,
        reocurringDays: ['friday'],
        cost: 12,
        pets: true,
        carType: 'maserti',
        seats: 4
      },
      {
        driverId: 5,
        start: 'Croosssfit st',
        end: 'taco time',
        departTime: 1200,
        reocurring: true,
        reocurringDays: ['friday'],
        cost: 12,
        pets: true,
        carType: 'maserti',
        seats: 4
      }

    ];

  //Need to figure out if I should use ("new Trips or new Trip") in the loop
    for(let trip of trips){
      var newTrip = new Trips(trip);
      newTrip.save();
    }


// var userSeed = require('../seeds/userSeed')
// var tripSeed = require('../seeds/tripSeed')
// app.get('/users/seed',  userSeed.seedUsers, tripSeed.seedTrips);
