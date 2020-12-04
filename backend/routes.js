/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function (app) {

  // Insert routes below 
 
  app.use('/api/timeslots', require('./api/timeslots'));

  app.use('/', (req, res) => {
    res.send("server running")
  })

};
