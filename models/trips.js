var mongoose = require('mongoose');

var tripSchema = new mongoose.Schema({
  driverId: {
    type: Number,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  },
  departTime: {
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
