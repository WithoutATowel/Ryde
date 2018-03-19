var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.connect('mongodb://localhost/ryde');

module.exports = {
  seedUsers: (req,res)=>{

    const users = [
      {
        name: 'Sean Cesmat',
        email: 'sean.cesmat@gmail.com',
        password: 'blahblah',
        address: {
          street: blah st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        workAddress: {
          street: work st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        dob: 09081989,
        seedId:1
      },
      {
        name: 'Another User',
        location: 'anotheruser@gmail.com',
        password: 'blahblah',
        address: {
          street: blah st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        workAddress: {
          street: work st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        dob: 09081989,
        seedId:2
      },
      {
        name: 'Brett',
        location: 'brettuser@gmail.com',
        password: 'blahblah',
        address: {
          street: blah st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        workAddress: {
          street: work st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        dob: 09081989,
        seedId:3
      },
      {
        name: 'brant',
        location: 'brantuser@gmail.com',
        password: 'blahblah',
        address: {
          street: blah st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        workAddress: {
          street: work st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        dob: 09081989,
        seedId:4
      },
      {
        name: 'Scott',
        location: 'scottuser@gmail.com',
        password: 'blahblah',
        address: {
          street: blah st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        workAddress: {
          street: work st,
          city: seattle,
          state: WA,
          zip: 98021
        },
        dob: 09081989,
        seedId:5
      }

    ];


    for(user of users){
      var newUser = new User();
      newUser.create();
    }
    res.send(console.log('database seeded'));
  }

}

// var userSeed = require('../seeds/userSeed')
// var tripSeed = require('../seeds/tripSeed')
// router.get('/users/seed',  userSeed.seedUsers, tripSeed.seedTrips);
