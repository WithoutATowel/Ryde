var mongoose = require('mongoose');
var Trips = require('../models/trips');

mongoose.connect('mongodb://localhost/ryde');

// module.exports = {

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
      carType: 'maserti',
      seats: 4
    },
    {
      driverId: 2,
      start: '1130 14th ave',
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
      start: '1130 14th ave',
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
      start: '1130 14th ave',
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
      start: '1130 14th ave',
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
  // for(trip of trips){
  //   var newTrip = new Trips();
  //   newTrip.create();
  // }

  // caves.forEach(cave => {
  //   console.log("adding a user...")
  //   Listing.create(
  //     {
  //       name: cave.name,
  //       location: cave.email,
  //     }, (err, listing) => {
  //       if (err) {
  //         return console.log(err);
  //       } else {
  //         return console.log(listing);
  //       }
  //     }
  //   )
  // });

// }
