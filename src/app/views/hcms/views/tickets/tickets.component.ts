import { Component, HostListener }                                   from '@angular/core';
import { FormControl, FormGroup, Validators }                        from '@angular/forms';
import { ActivatedRoute, Router }                                    from '@angular/router';
import { markTouchedAndScroll }                                      from '@widgets/reactive/reactive-funcs';
import { randomDate, randomIntNumber }                               from '@functions/random';
import { finalize, tap }                                             from 'rxjs/operators';
import { Observable }                                                from 'rxjs';
import isEmpty                                                       from 'lodash/isEmpty';
import identity                                                      from 'lodash/identity';
import pickBy                                                        from 'lodash/pickBy';
import includes                                                      from 'lodash/includes';
import { Ticket, TicketsService }                                    from './tickets.service';
import { CATEGORY_OPTIONS, INFORMER_POSITION_OPTIONS, LINK_OPTIONS } from '../../functions/dictionaries';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent {

  isModalVisible: boolean;
  isTicketsLoading: boolean;
  isSubmitTicketLoading: boolean;

  tickets: Ticket[];
  tickets$ = this.getTickets();
  submitTicket$: Observable<any>;
  deleteTicket$: Observable<any>;

  categoryOptions = CATEGORY_OPTIONS;
  linkOptions = LINK_OPTIONS;
  informerPositionOptions = INFORMER_POSITION_OPTIONS;

  ticketFg = new FormGroup({
    id: new FormControl(),
    category: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    time: new FormControl(null, Validators.required),
    link: new FormControl(null, Validators.required),
    violation: new FormControl(null, Validators.required),
    informer: new FormControl(null, Validators.required),
    informerPosition: new FormControl(null, Validators.required),
    informerContacts: new FormControl(null, Validators.required),
    shortDescription: new FormControl(null, Validators.required),
    fullDescription: new FormControl(null, Validators.required),
    involvedDepartment: new FormControl(null, Validators.required),
    involvedPersons: new FormControl(null, Validators.required),
    informedPersons: new FormControl(null, Validators.required),
    evidences: new FormControl(null, Validators.required),
    additionalInformation: new FormControl(null, Validators.required),
    uniqueNumber: new FormControl(null, Validators.required),
    ticketDateSent: new FormControl(null, Validators.required),
    companyActions: new FormControl(null, Validators.required)
  });

  valueChanges$ = this.ticketFg.valueChanges.pipe(
    tap(value => this.router.navigate([], {relativeTo: this.route, queryParams: pickBy(value, identity)}))
  );

  @HostListener('document:keydown', ['$event']) onKeydown({key, ctrlKey}: KeyboardEvent): void {
    if (ctrlKey && includes(['q', 'й', 'Q', 'Й'], key)) {
      this.ticketFg.patchValue(randomTicket());
      if (!this.isModalVisible) this.isModalVisible = true;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketsService: TicketsService
  ) {
    const {queryParams} = this.route.snapshot;
    if (!isEmpty(queryParams)) {
      this.ticketFg.patchValue(queryParams);
      this.isModalVisible = true;
    }
  }

  getTickets(): Observable<Ticket[]> {
    this.isTicketsLoading = true;
    return this.ticketsService.getTickets().pipe(
      tap(tickets => this.tickets = tickets),
      finalize(() => this.isTicketsLoading = false)
    );
  }

  submitTicket(): void {
    if (this.ticketFg.valid) {
      this.isSubmitTicketLoading = true;
      this.submitTicket$ = this.ticketsService.submitTicket(this.ticketFg.value).pipe(
        tap(() => this.tickets$ = this.getTickets()),
        tap(() => this.closeModal()),
        finalize(() => this.isSubmitTicketLoading = false)
      );
    } else markTouchedAndScroll(this.ticketFg);
  }

  deleteTicket(ticket: Ticket): void {
    ticket['isDeleteLoading'] = true;
    this.deleteTicket$ = this.ticketsService.deleteTicket(ticket).pipe(
      tap(() => this.tickets$ = this.getTickets()),
      finalize(() => ticket['isDeleteLoading'] = false)
    );
  }

  openModal(ticket?: Ticket): void {
    this.isModalVisible = true;
    if (ticket) this.ticketFg.patchValue(ticket);
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.ticketFg.reset();
    this.router.navigate([], {relativeTo: this.route, queryParams: null});
  }
}


function randomTicket(): any {
  return {
    category: randomIntNumber(1, 4),
    date: randomDate(),
    time: randomDate(),
    link: randomIntNumber(1, 4),
    violation: randomIntNumber() + ' violation ' + randomIntNumber(),
    informer: randomIntNumber() + ' informer ' + randomIntNumber(),
    informerPosition: randomIntNumber(1, 4),
    informerContacts: randomIntNumber() + ' informerContacts ' + randomIntNumber(),
    shortDescription: randomIntNumber() + ' shortDescription ' + randomIntNumber(),
    fullDescription: randomIntNumber() + ' fullDescription ' + randomIntNumber(),
    involvedDepartment: randomIntNumber() + ' involvedDepartment ' + randomIntNumber(),
    involvedPersons: randomIntNumber() + ' involvedPersons ' + randomIntNumber(),
    informedPersons: randomIntNumber() + ' informedPersons ' + randomIntNumber(),
    evidences: randomIntNumber() + ' evidences ' + randomIntNumber(),
    additionalInformation: randomIntNumber() + ' additionalInformation ' + randomIntNumber(),
    uniqueNumber: randomIntNumber(),
    ticketDateSent: randomDate(),
    companyActions: randomIntNumber() + ' companyActions ' + randomIntNumber()
  };
}
