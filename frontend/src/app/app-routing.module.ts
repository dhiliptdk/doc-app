import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';


const routes: Routes = [
  { path: "slots", component: TimeslotsComponent },
  { path: "appointments", component: AppointmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
