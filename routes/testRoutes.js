'use strict';
module.exports = function(app) {
  var testList = require('../controllers/testController');

  // testList Routes
  console.log('TESTLIST ===> ', require('util').inspect(testList, {colors: true, depth: 2}))

  app.route('/items')
    .get(testList.list_all_items)
    .post(testList.create_an_item);


  app.route('/items/:itemId')
    .get(testList.read_an_item)
    .put(testList.update_an_item)
    .delete(testList.delete_an_item);
};
