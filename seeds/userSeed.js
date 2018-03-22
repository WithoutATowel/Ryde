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
        dryverReviews:['pretty girl', 'big brat'],
        dryverRatings: [2,5],
        ryderRatings: [2,5],
        ryderReviews:['crapper', 'shit brains'],
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
        dryverReviews:['professional', 'drives well', 'bad taste in music'],
        dryverRatings: [5,4],
        ryderRatings: [3,5],
        ryderReviews:['bad person','why in life am I doing this to myself'],
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
        dryverReviews:['loves his self', 'talks in third person too much'],
        dryverRatings: [1,2],
        ryderRatings: [2,4],
        ryderReviews:['die bitch', 'killing it bro'],
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
        dryverReviews:['professional', 'has money'],
        dryverRatings: [3,4],
        ryderRatings: [2,1],
        ryderReviews:['dope', 'I have cancer'],
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
        dryverReviews: ['horrible ride', 'dipshit person'],
        dryverRatings: [3,1],
        ryderRatings: [5,5],
        ryderReviews:['my life is awesome', 'read king killer chronicles'],
      }

    ];


    for(let user of users){
      var newUser = new User(user);
      newUser.save();
    }
