import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AddTimeslotComponent } from '../add-timeslot/add-timeslot.component';
import { TimeslotService } from '../_services/timeslot.service';
import * as moment_ from 'moment';
import { TimeSlots } from '../_common/_interfaces/timeslot.interface';
import { TIME_LIMIT } from '../_common/_const/time-limit.const';
const moment = moment_;

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.scss']
})
export class TimeslotsComponent implements OnInit {
  timeSlots: { morning: TimeSlots[], evening: TimeSlots[] } = {
    morning: [],
    evening: []
  }
  displayName = {
    morning: "Morning",
    evening: "Evening"
  }
  displayTiming = TIME_LIMIT
  date = new FormControl({
    value: moment(),
    disabled: true
  })
  constructor(public timeSlotService: TimeslotService, public dialog: MatDialog) { }
  ngOnInit() {
    this.refreshTimeslots()
  }
  refreshTimeslots() {
    this.refreshTimeslot("morning")
    this.refreshTimeslot("evening")
  }
  refreshTimeslot(shift) {
    this.timeSlotService.getTimeSlots({ date: this.date.value, shift }).subscribe(res => {
      this.timeSlots[shift] = res
    })
  }
  openAddSlotDialog(shift) {
    const dialog = this.dialog.open(AddTimeslotComponent, {
      data: {
        date: this.date.value.startOf('day'),
        shift,
        timeSlots: this.timeSlots
      }
    })
    dialog.afterClosed().subscribe(res => {
      this.refreshTimeslot(shift)
    })
  }
  dateChange(evt) {
    this.refreshTimeslots()
  }
}
