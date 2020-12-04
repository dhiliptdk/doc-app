'use strict';

var TimeSlots = require('./timeslots.model');

/**

 */
exports.index = function (req, res) {
    TimeSlots.find({}, function (err, timeslots) {
        if (err) return res.status(500).send(err);
        res.status(200).json(timeslots);
    });
};
