'use strict';

var express = require('express');
var controller = require('./timeslots.controller');
var config = require('../../config/environment');

var router = express.Router();

router.post('/index', controller.index);


router.use("/",(req,res)=>{
    res.send("timeslots running")
})
module.exports = router;
