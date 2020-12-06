import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  endpoint_prefix = "/api/appointment"
  url = `${environment.BACKEND_URL}${this.endpoint_prefix}`
  constructor(private http: HttpClient) { }
  create(payload) {
    return this.http.post(`${this.url}/create`, payload)
  }
}
