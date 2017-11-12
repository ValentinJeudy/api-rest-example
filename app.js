const express = require('express'),
app = express(),
port = process.env.PORT || 4000,
mongoose = require('mongoose'),
Items = require('./models/testModel'), //created model loading here
bodyParser = require('body-parser')

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test-api', {
    useMongoClient: true
    /* other options */
  })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./routes/testRoutes'); //importing route
routes(app) //register the route

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)