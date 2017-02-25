const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Habit = new Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model( 'Habit', Habit );
