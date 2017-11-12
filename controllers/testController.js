'use strict';

const mongoose = require('mongoose'),
  Items = mongoose.model('Items')

module.exports = {
  list_all_items: function(req, res) {
    Items.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  },
  create_an_item: function(req, res) {
    var new_item = new Items(req.body);
    new_item.save(function(err, item) {
      if (err)
        res.send(err);
      res.json(item);
    });
  },
  read_an_item: function(req, res) {
    Items.findById(req.params.taskId, function(err, item) {
      if (err)
        res.send(err);
      res.json(item);
    });
  },
  update_an_item: function(req, res) {
    Items.findOneAndUpdate({_id: req.params.testId}, req.body, {new: true}, function(err, item) {
      if (err)
        res.send(err);
      res.json(item);
    });
  },
  delete_an_item: function(req, res) {
    Items.remove({
      _id: req.params.itemId
    }, function(err, item) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  }
}
