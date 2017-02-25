const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Habit = new Schema({
  habitName: { type: String, required: true },
  habitDesc: { type: String },
  frequency: { type: String, required: true },
  category: { type: String, required: true},
  startDate: { type: Date },
  duration: { type: Number, required: true}
});

module.exports = mongoose.model( 'Habit', Habit );
