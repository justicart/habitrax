const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Habit = new Schema({
  habitName: { type: String, required: true },
  habitDesc: { type: String },
  frequency: { type: String },
  category: { type: String, required: true},
  startDate: { type: Date },
  duration: { type: Number, required: true},
  days: { type: Array }
});

module.exports = mongoose.model( 'Habit', Habit );
