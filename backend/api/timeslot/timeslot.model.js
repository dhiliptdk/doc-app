'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const shiftEnum = ["morning", "evening"]
var TimeSlotSchema = new Schema({
    date: Date,
    startAt: String,
    endAt: String,
    shift: {
        type: String,
        enum: shiftEnum,
        required: true
    }
});
module.exports = mongoose.model('TimeSlot', TimeSlotSchema);

TimeSlotSchema.virtual("bookedBy", {
    ref: 'Appointment',
    localField: '_id',
    foreignField: 'at',
    justOne: true
})