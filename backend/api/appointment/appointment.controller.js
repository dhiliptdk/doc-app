'use strict';

var Appointment = require('./appointment.model');

/**
 * Create appointment
 * req.body{
 * by:"name", (as of now string),
 * on:TimeSlot._id
 * }
*/
exports.create = function (req, res) {
    Appointment.create(req.body, function (err, appointment) {
        if (err && err.code == 11000) {
            return res.status(500).json({ err_code: "TIMESLOT_BOOKED_ALREADY", message: "Time Slot booked already" })
        }
        if (err) { return handleError(res, err); }
        return res.status(201).json(appointment);
    });
}

function handleError(res, err) {
    res.status(500).send(err)
}