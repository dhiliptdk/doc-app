/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function (app) {

  // Insert routes below 

  app.use('/api/timeslot', require('./api/timeslot'));
  app.use('/api/appointment', require('./api/appointment'));

  app.use('/', (req, res) => {
    res.send("server running")
  })

};
