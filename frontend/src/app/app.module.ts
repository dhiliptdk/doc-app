import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TimeslotsComponent } from './timeslots/timeslots.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './_common/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTimeslotComponent } from './add-timeslot/add-timeslot.component';
import { TimeslotService } from './_services/timeslot.service';
import { SortRangesPipe } from './_common/_pipes/sort-ranges.pipe';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { TimePipe } from './_common/_pipes/time.pipe';
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    TimeslotsComponent,
    NavBarComponent,
    AddTimeslotComponent,
    SortRangesPipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TimeslotService,
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddTimeslotComponent]
})
export class AppModule { }
