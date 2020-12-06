'use strict';

var mongoose = require('mongoose');
const timeslotModel = require('../timeslot/timeslot.model');
var Schema = mongoose.Schema;
var AppointmentSchema = new Schema({
    by: String,
    at: {
        type: Schema.Types.ObjectId, ref: "TimeSlot", required: true, unique: true,
        validate: {
            validator: function (v) {
                return new Promise(resolve => {
                    timeslotModel.findById(v, function (err, doc) {
                        resolve(!!doc);
                    });
                })

            },
            message: 'Time slot not exists!'
        }
    }
});
module.exports = mongoose.model('Appointment', AppointmentSchema);