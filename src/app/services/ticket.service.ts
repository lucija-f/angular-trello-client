import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from 'src/models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl = "http://localhost:8080/tickets"

  constructor(private http: HttpClient) {}

  getTickets(statusId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/status/${statusId}`);
  }

  changeStatus(ticketId: number, statusId: number): Observable<Ticket> {
    console.log('ticket', ticketId);
    console.log('status', statusId);
    return this.http.patch<Ticket>(`${this.baseUrl}/${ticketId}`, {statusId: statusId})
  }

  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}`, ticket)
  }

  deleteTicket(ticketId: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${ticketId}`)
  }
}
