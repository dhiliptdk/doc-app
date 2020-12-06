import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimeslotService } from '../_services/timeslot.service';
import * as moment_ from 'moment';
import { time } from '../_common/util';
import { TimeSlots } from '../_common/_interfaces/timeslot.interface';
import { TIME_LIMIT } from '../_common/_const/time-limit.const';
const moment = moment_;

@Component({
  selector: 'app-add-timeslot',
  templateUrl: './add-timeslot.component.html',
  styleUrls: ['./add-timeslot.component.scss']
})
export class AddTimeslotComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { shift: string, date: any, timeSlots: TimeSlots[] },
    private fb: FormBuilder,
    public timeSlotService: TimeslotService,
    public dialogRef: MatDialogRef<AddTimeslotComponent>,) { }
  timeslotFormGroup: FormGroup
  shifts = shifts
  message = ""
  limit = TIME_LIMIT
  ngOnInit(): void {
    this.timeslotFormGroup = this.fb.group({
      date: [this.data.date],
      startAt: ['', Validators.required],
      endAt: ['', Validators.required],
      shift: [this.data.shift, Validators.required]
    }, {
      validator: [
        rangeValidator("startAt", "endAt"),
        limitValidator("startAt", "endAt"),
        durationValidator("startAt", "endAt", moment.duration(30, "minutes"))]
    })
  }
  addTimeSlot(fg) {
    this.message = ''
    console.log(this.data)
    const canInsertTimeSlot = canInsert(this.data.timeSlots[fg.value.shift], fg.value)
    if (canInsertTimeSlot) {
      console.log("Timeslot not overlapping")
      this.timeSlotService.addTimeSlot(fg.value).subscribe(res => {
        this.dialogRef.close(true)
      })
    } else {
      console.log("Timeslot overlapping")
      this.message = "Time slot overlaping with existing timeslot"
    }
  }
}

const shifts = [
  { title: "Morning", value: "morning" },
  { title: "Evening", value: "evening" }
]
function canInsert(timeslots, timeslot) {
  return timeslots.every(t => {
    return isValid(t, timeslot);
  });
}

function isValid(timeslot1, timeslot2) {
  let t1Start = time(timeslot1.startAt),
    t1End = time(timeslot1.endAt),
    t2Start = time(timeslot2.startAt),
    t2End = time(timeslot2.endAt);
  // (StartA >= EndB or EndA <= StartB )
  return (t1Start.isSameOrAfter(t2End) || t1End.isSameOrBefore(t2Start));
}

export const rangeValidator = (startFieldName: string, endFieldName: string) => {
  return (formGroup: FormGroup) => {
    const startControl = formGroup.controls[startFieldName];
    const endControl = formGroup.controls[endFieldName];
    const startTime = time(startControl.value)
    const endTime = time(endControl.value)

    if ((startControl.errors && !startControl.errors.max)
      || (endControl.errors && !endControl.errors.min)) {
      return;
    }
    // VALID TIME RANGE OR NOT
    if (startTime.isAfter(endTime)) {
      startControl.setErrors({ max: true });
      endControl.setErrors({ min: true });
      return;
    }
    startControl.setErrors(null);
    endControl.setErrors(null);
  }
}

export const durationValidator = (startFieldName: string, endFieldName: string, duration?: moment_.Duration) => {
  return (formGroup: FormGroup) => {
    const startControl = formGroup.controls[startFieldName];
    const endControl = formGroup.controls[endFieldName];
    const startTime = time(startControl.value)
    const endTime = time(endControl.value)

    if (startControl.errors && !startControl.errors.duration ||
      endControl.errors && !endControl.errors.duration) {
      return;
    }

    // DURATION IS AS SPECIFIED OR NOT
    if (duration) {
      var diff = moment.duration(endTime.diff(startTime));
      console.log(diff.asSeconds(), duration.asSeconds())
      if (diff.asSeconds() != duration.asSeconds()) {
        startControl.setErrors({ duration: true });
        endControl.setErrors({ duration: true });
        return
      }
    }
    startControl.setErrors(null);
    endControl.setErrors(null);
  }
}

export const limitValidator = (startFieldName: string, endFieldName: string) => {
  return (formGroup: FormGroup) => {
    const startControl = formGroup.controls[startFieldName];
    const endControl = formGroup.controls[endFieldName];
    const startTime = time(startControl.value)
    const endTime = time(endControl.value)
    if (startControl.errors && !startControl.errors.limit ||
      endControl.errors && !endControl.errors.limit) {
      return;
    }
    let _limit = TIME_LIMIT[formGroup.get('shift').value]
    if (!startTime.isBetween(_limit.start, _limit.end, undefined, "[]")) {
      return startControl.setErrors({ limit: true })
    }
    if (!endTime.isBetween(_limit.start, _limit.end, undefined, "[]")) {
      return endControl.setErrors({ limit: true })
    }
    startControl.setErrors(null);
    endControl.setErrors(null);
  }
}




