'use strict';

var express = require('express');
var controller = require('./timeslot.controller');

var router = express.Router();

router.post('/appointments', controller.appointments);
router.post('/index', controller.index)
router.put('/', controller.put)

// router.use("/", (req, res) => {
//     res.send("timeslots running")
// })
module.exports = router;
