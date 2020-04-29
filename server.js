// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express')
var cors = require('cors')
var app = express()
var port = process.env.PORT
var bodyParser = require('body-parser')

var morgan = require('morgan')

// set up our express application
app.use(morgan('dev')) // log every request to the console
app.use(bodyParser.json())       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}))
app.use(cors())
// routes ======================================================================
require('./app/routes.js')(app) // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port)
console.log('The magic happens on port ' + port)
