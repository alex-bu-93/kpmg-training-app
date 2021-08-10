import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router }             from '@angular/router';
import { NzNotificationService }              from 'ng-zorro-antd/notification';
import { catchError, finalize, tap }          from 'rxjs/operators';
import { Observable, throwError }             from 'rxjs';
import { Ticket, TicketsService }             from './tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent {

  isModalVisible: boolean;
  isTicketsLoading: boolean;

  tickets: Ticket[];
  tickets$ = this.getTickets();

  ticketFg = new FormGroup({
    id: new FormControl(),
    category: new FormControl(null, Validators.required),
    date: new FormControl(),
    time: new FormControl(),
    link: new FormControl(null, Validators.required),
    violation: new FormControl(),
    informer: new FormControl(),
    informerPosition: new FormControl(),
    informerContacts: new FormControl(),
    shortDescription: new FormControl(),
    fullDescription: new FormControl(),
    involvedDepartment: new FormControl(),
    involvedPersons: new FormControl(),
    informedPersons: new FormControl(),
    awarePersons: new FormControl(),
    evidences: new FormControl(),
    additionalInformation: new FormControl(),
    uniqueNumber: new FormControl(),
    ticketDateSent: new FormControl(),
    companyActions: new FormControl()
  });

  valueChanges$: Observable<any>;

  constructor(
    private ticketsService: TicketsService,
    private notification: NzNotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    // this.ticketFg.controls.link.valueChanges(link =>
    //   this.ticketFg.patchValue({category: 'test'})
    //   this.ticketFg.controls.category.patchValue('test')
    // )

    this.ticketFg.patchValue(this.route.snapshot.queryParams);
    this.valueChanges$ = this.ticketFg.valueChanges.pipe(
      tap(value => this.router.navigate([], {relativeTo: this.route, queryParams: value}))
    );
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      this.isModalVisible = true;
    }
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

  onSubmitTicket(): void {
    if (this.ticketFg.valid) {
      console.log('Valid value', this.ticketFg.value);
    } else {
      this.ticketFg.markAllAsTouched();
    }
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.router.navigate([], {relativeTo: this.route, queryParams: {}});
  }
}
