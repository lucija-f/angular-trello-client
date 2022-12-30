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

  getStatuses(boardId: number): Observable<Status[]> {
    return this.http.get<Status[]>(`${this.baseUrl}/board/${boardId}`);
  }

  addStatusColumn(status: Status): Observable<Status> {
    return this.http.post<Status>(`${this.baseUrl}`, status)
  }

  deleteStatus(statusId: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${statusId}`)
  }

  patchStatusColumn(statusId: number, title: string): Observable<Status> {
    return this.http.patch<Status>(`${this.baseUrl}/${statusId}`, {name: title})
  }

}
