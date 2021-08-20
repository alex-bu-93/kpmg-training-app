import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { NzNotificationService }  from 'ng-zorro-antd/notification';
import { Observable, throwError } from 'rxjs';
import { catchError, tap }        from 'rxjs/operators';

export interface Ticket {
  id?: string;
  category: any;
  date: any;
  time: any;
  link: any;
  violation: any;
  informer: any;
  informerPosition: any;
  informerContacts: any;
  shortDescription: any;
  fullDescription: any;
  involvedDepartment: any;
  involvedPersons: any;
  informedPersons: any;
  evidences: any;
  additionalInformation: any;
  uniqueNumber: any;
  ticketDateSent: any;
  companyActions: any;
}

@Injectable({providedIn: 'root'})
export class TicketsService {

  constructor(
    private http: HttpClient,
    private notification: NzNotificationService
  ) {
  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('tickets').pipe(
      catchError(err => {
        this.notification.create('error', 'Ошибка', 'Не удалось получить данные');
        return throwError(err);
      })
    );
  }

  submitTicket({id, ...ticketPayload}: Ticket): Observable<any> {
    return this.http[id ? 'put' : 'post']<any>(['tickets', id].filter(Boolean).join('/'), ticketPayload).pipe(
      tap(res => this.notification.create('success', 'Успешно', `Обращение сохранено: ${res.id}`)),
      catchError(err => {
        this.notification.create('error', 'Ошибка', 'Не удалось выполнить');
        return throwError(err);
      })
    );
  }

  deleteTicket({id}: Ticket): Observable<any> {
    return this.http.delete<any>(`tickets/${id}`).pipe(
      tap(res => this.notification.create('success', 'Успешно', `Обращение удалено: ${id}`)),
      catchError(err => {
        this.notification.create('error', 'Ошибка', 'Не удалось удалить');
        return throwError(err);
      })
    );
  }
}
