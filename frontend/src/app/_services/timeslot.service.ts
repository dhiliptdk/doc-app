import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimeslotService {
  endpoint_prefix = "/api/timeslot"
  url = `${environment.BACKEND_URL}${this.endpoint_prefix}`
  constructor(private http: HttpClient) { }
  getTimeSlots(query) {
    return this.http.post(`${this.url}/index`, query)
  }
  addTimeSlot(timeslot) {
    return this.http.put(`${this.url}/`, timeslot)
  }
  getAppointments(query) {
    return this.http.post(`${this.url}/appointments`, query)

  }
}
