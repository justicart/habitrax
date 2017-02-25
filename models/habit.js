const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Habit = new Schema({
  habitName: { type: String, required: true },
  frequency: { type: String, required: true },
  category: { type: String, required: true}
});

module.exports = mongoose.model( 'Habit', Habit );
