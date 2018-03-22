var mongoose = require('mongoose');
var User = require('../models/user');

mongoose.connect('mongodb://localhost/ryde');

    const users = [
      {
        name: 'Sean Cesmat',
        email: 'sean.cesmat@gmail.com',
        password: 'blahblah',
        homeAddress: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        driver:true,
        car: 'triumph',
        driverReviews:['pretty girl', 'big brat'],
        driverRating: [2,5],
        riderRating:[2,5],
        riderReviews:['crapper', 'shit brains'],
        pendingTrips:[],
        setTrips:[],
        deniedTrips:[],
        completedTrips:[],
      },
      {
        name: 'Another User',
        email: 'anotheruser@gmail.com',
        password: 'blahblah',
        homeAddress: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        driver:true,
        car: 'beetle',
        driverReviews:['professional', 'drives well', 'bad taste in music'],
        driverRating: [5,4],
        riderRating:[3,5],
        riderReviews:['bad person','why in life am I doing this to myself'],
      },
      {
        name: 'Brett',
        email: 'brettuser@gmail.com',
        password: 'blahblah',
        homeAddress: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        driver:true,
        car: 'actual horse',
        driverReviews:['loves his self', 'talks in third person to much'],
        driverRating: [1,2],
        riderRating:[2,4],
        riderReviews:['die bitch', 'killing it bro'],
      },
      {
        name: 'brant',
        email: 'brantuser@gmail.com',
        password: 'blahblah',
        homeAddress: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        driver:true,
        car: 'my back',
        driverReviews:['professional', 'has money'],
        driverRating: [3,4],
        riderRating:[2,1],
        riderReviews:['dope', 'I have cancer'],
      },
      {
        name: 'Scott',
        email: 'scottuser@gmail.com',
        password: 'blahblah',
        homeAddress: {
          street: 'blah st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        workAddress: {
          street: 'work st',
          city: 'seattle',
          state: 'WA',
          zip: 98021
        },
        dob: 09081989,
        driver:true,
        car: 'bmw',
        driverReviews: ['horrible ride', 'dipshit person'],
        driverRating: [3,1],
        riderRating:[5,5],
        riderReviews:['my life is awesome', 'read king killer chronicles'],
      }

    ];


    for(let user of users){
      var newUser = new User(user);
      newUser.save();
    }
