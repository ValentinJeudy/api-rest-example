'use strict';
module.exports = function(app) {
  var testList = require('../controllers/testController');

  // testList Routes
  app.route('/items')
    .get(testList.list_all_items)
    .post(testList.create_a_items)


  app.route('/items/:itemId')
    .get(testList.read_a_item)
    .put(testList.update_a_item)
    .delete(testList.delete_a_item)
};
