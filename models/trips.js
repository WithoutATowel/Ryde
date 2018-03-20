var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new mongoose.Schema({
  driverId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rydeName: {
    type: String,
    required: true
  },
  startAddress: {
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
  endAddress: {
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
  departDate: {
    type: Number,
    required: true
  },
  reoccurring: {
    type: Boolean,
    required: true
  },
  reoccurringDays: Array,
  cost: {
    type: Number,
    required: true
  },
  costBreakdown: String,
  smoking: Boolean,
  pets: Boolean,
  carType: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  comments: Array,
  ridersId: Array,
  setRiders: Array,
  pendingRiders: Array,
  deniedRiders: Array
})


var Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
