const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');

router.get('/', (req, res) => {
  Habit.find( ( err, habits ) => {
    res.json(habits);
  });
});

router.post('/', (req, res) => {
  new Habit({
    habitName: req.body.habitName,
    habitDesc: req.body.habitDesc,
    frequency: req.body.frequency,
    category: req.body.category,
    startDate: req.body.startDate,
    duration: req.body.duration,
  }).save( (err, habit) => {
    res.json(habit);
  });
});

router.put('/:id', ( req, res ) => {
  let { name } = req.body;
  Habit.findByIdAndUpdate(
    req.params.id,
    { $set: { name }},
    { new: true },
    (err, habit) => {
      res.json(habit);
    });
});

router.delete('/:id', (req, res) => {
  let habitId = req.params.id;
  Habit.findById(habitId, (err, habit) => {
    habit.remove();
    // List.find({ habitId }, (err, lists) => {
    //   lists.forEach( list => {
    //     Card.find({'listId': list._id}).remove().exec();
    //     list.remove()
    //   } );
    // });
    res.status(200).send({success: true});
  });
});

router.get('/:id', (req, res) => {
  Habit.findById(req.params.id, (err, habit) => {
    res.json(habit);
  })
});

module.exports = router;
