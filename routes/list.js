const express = require('express');
const router = express.Router();
const List = require('../models/list');

router.get('/', (req, res) => {
  List.find({ habitId: req.query.habitId }, ( err, habits ) => {
    res.json(habits);
  });
});

router.post('/', (req, res) => {
  let { habitId, name } = req.body;
  new List({
    name,
    habitId
  }).save( (err, list) => {
    res.json(list);
  });
});

router.delete('/:id', (req, res) => {
  List.findById(req.params.id, (err, list) => {
    list.remove();
    Card.find({'listId': req.query.id}).remove().exec( (err, list) => {
      res.status(200).send({success: true});
    });
  });
});
module.exports = router;
