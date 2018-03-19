var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.connect('mongodb://localhost/ryde');

// module.exports = {

  var users = [
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
