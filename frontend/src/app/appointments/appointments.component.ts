import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment_ from 'moment';
import { TimeslotService } from '../_services/timeslot.service';
const moment = moment_;
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor(private timeSlotService: TimeslotService) { }
  date = new FormControl({
    value: moment(),
    disabled: true
  })
  all_appoinments
  ngOnInit(): void {
    this.get()
  }
  get appointments() {
    return this.all_appoinments && this.all_appoinments.filter((a) => a.bookedBy)
  }
  get count() {
    let c = { available: 0, booked: 0 }
    if (!(!!this.all_appoinments)) return c
    return this.all_appoinments.reduce((acc, app) => {
      if (!app.bookedBy) acc["available"]++
      else acc["booked"]++
      return acc
    }, c)
  }
  get() {
    this.timeSlotService.getAppointments({ date: this.date.value }).subscribe((res: any[]) => {
      console.log(res)
      this.all_appoinments = res
    })
  }

}
