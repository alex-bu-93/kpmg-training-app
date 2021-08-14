import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ticket {
  [key: string]: string;
}

@Injectable({providedIn: 'root'})
export class TicketsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('tickets');
  }
}
