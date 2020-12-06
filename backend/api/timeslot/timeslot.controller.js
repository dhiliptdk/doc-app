'use strict';

var TimeSlot = require('./timeslot.model');
var moment = require('moment');
/**
List all timeslots in a date
 */
exports.appointments = function (req, res) {
    req.body.date = {
        $gte: moment(req.body.date).startOf('day').toDate(),
        $lte: moment(req.body.date).endOf('day').toDate()
    }
    TimeSlot.find({ date: req.body.date }).populate("bookedBy").exec(function (err, timeslot) {
        console.log(err, timeslot)
        if (err) return res.status(500).send(err);
        res.status(200).json(timeslot);
    });
};

exports.index = function (req, res) {
    req.body.date = {
        $gte: moment(req.body.date).startOf('day').toDate(),
        $lte: moment(req.body.date).endOf('day').toDate()
    }
    TimeSlot.find(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result)
    })
}

/**
 * Create timeslot
 */
exports.put = function (req, res) {
    console.log(req.body)
    req.body.date = moment(req.body.date)
    console.log(req.body)
    TimeSlot.create(req.body, function (err, timeslot) {
        console.log()
        if (err) { return handleError(res, err); }
        return res.status(201).json(timeslot);
    });
}
/**
 * Book appointment
 */
exports.book = function (req, res) {
    TimeSlot.findByIdAndUpdate(req.body.id, {})
}

function handleError(res, err) {
    res.status(500).send(err)
}