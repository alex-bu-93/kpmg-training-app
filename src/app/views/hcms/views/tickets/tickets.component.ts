import { Component }                 from '@angular/core';
import { NzNotificationService }     from 'ng-zorro-antd/notification';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Observable, throwError }    from 'rxjs';
import { Ticket, TicketsService }    from './tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent {

  isModalVisible: boolean;
  isTicketsLoading: boolean;

  tickets: Ticket[];
  tickets$ = this.getTickets();

  constructor(
    private ticketsService: TicketsService,
    private notification: NzNotificationService
  ) {
  }

  getTickets(): Observable<Ticket[]> {
    this.isTicketsLoading = true;
    return this.ticketsService.getTickets().pipe(
      tap(tickets => this.tickets = tickets),
      finalize(() => this.isTicketsLoading = false),
      catchError(err => {
        this.notification.create(
          'error',
          'Возникла проблема',
          'Не удалось получить данные'
        );
        return throwError(err);
      })
    );
  }
}
