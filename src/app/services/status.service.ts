import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from 'src/models/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  baseUrl = "http://localhost:8080/statuses"

  constructor(private http: HttpClient) {}

  getStatuses(): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.baseUrl}`);
  }

}
