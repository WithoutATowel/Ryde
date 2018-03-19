var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 99
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 99
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 99
  },
  homeAddress: {
    street: String,
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 2
    },
    zip: Number
  },
  workAddress: {
    street: String,
    city: {
      type: String,
    },
    state: {
      type: String,
      minLength: 2,
      maxLength: 2
    },
    zip: Number
  },
  dob: {
    type: Number,
    required: true
  },
  driver: Boolean,
  car: String,
  license: String,
  driverReviews: Array,
  riderReviews: Array,
  setTrips: Array,
  pendingTrips: Array,
  deniedTrips: Array,
  completedTrips: Array,
  seedId: Number,
  trips: [{ type: Schema.Types.ObjectId, ref: 'Trips' }]
})

userSchema.set('toJSON', {
  transform: function(doc, ret, options) {  // ret stands for return
    let returnJson = {
      _id: ret._id,
      email: ret.email,
      name: ret.name
    }
    return returnJson
  }
})

userSchema.methods.authenticated = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, res) {
    if (err) {
      cb(err)
    } else {
      cb(null, res ? this : false)
    }
  })
}

userSchema.pre('save', function(next) {
  var hash = bcrypt.hashSync(this.password, 10)
  this.password = hash;
  next();
})

var User = mongoose.model('User', userSchema);

module.exports = User;
