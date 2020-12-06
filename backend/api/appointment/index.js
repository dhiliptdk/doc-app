'use strict';

var express = require('express');
var controller = require('./appointment.controller');

var router = express.Router();

router.post('/create', controller.create);

router.use("/", (req, res) => {
    res.send("timeslots running")
})
module.exports = router;
