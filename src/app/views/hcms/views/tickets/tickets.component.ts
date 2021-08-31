import { Component, HostListener }            from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router }     from '@angular/router';
import { markTouchedAndScroll }               from '@widgets/reactive/reactive-funcs';
import { EMAIL_PATTERN }                      from '@widgets/reactive/reactive-info/reactive-validation-message';
import { randomDate, randomIntNumber }        from '@functions/random';
import { delay, filter, finalize, tap }       from 'rxjs/operators';
import { Observable }                         from 'rxjs';
import isEmpty                                from 'lodash/isEmpty';
import identity                               from 'lodash/identity';
import pickBy                                 from 'lodash/pickBy';
import uniq                                   from 'lodash/uniq';
import includes                               from 'lodash/includes';
import { Ticket, TicketsService }             from './tickets.service';
import { DictionariesService }                from '../../services/dictionaries';

const toNumber = (str: string) => str && !isNaN(+str) && +str;
const toDate = (str: string) => str && Date.parse(str) && new Date(str);
const toNumberList = (strList: string[]) => strList && strList.map(toNumber);

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styles: [`nz-divider { margin: 4px 0 16px 0 !important }`]
})
export class TicketsComponent {

  isModalVisible: boolean;
  isSubmitTicketLoading: boolean;

  tickets$ = this.ticketsService.getTickets();
  submitTicket$: Observable<any>;
  deleteTicket$: Observable<any>;

  get qp(): Params { return this.route.snapshot.queryParams; }
  ticketFg = new FormGroup({
    id: new FormControl(),
    category: new FormControl(toNumber(this.qp.category), Validators.required),
    date: new FormControl(toDate(this.qp.date), Validators.required),
    time: new FormControl(toDate(this.qp.time), Validators.required),
    link: new FormControl(toNumber(this.qp.link), Validators.required),
    violation: new FormControl(toNumberList(this.qp.violation), Validators.required),
    informerGender: new FormControl(this.qp.informerGender, Validators.required),
    informerName: new FormControl(this.qp.informerName, Validators.required),
    informerPosition: new FormControl(toNumber(this.qp.informerPosition), Validators.required),
    informerPhone: new FormControl(this.qp.informerPhone),
    informerEmail: new FormControl(this.qp.informerEmail, Validators.pattern(EMAIL_PATTERN)),
    description: new FormControl(this.qp.description, Validators.required),
    involvedDepartment: new FormControl(this.qp.involvedDepartment, Validators.required),
    involvedPersons: new FormControl(this.qp.involvedPersons, Validators.required),
    informedPersons: new FormControl(this.qp.informedPersons, Validators.required),
    evidences: new FormControl(this.qp.evidences, Validators.required),
    additionalInformation: new FormControl(this.qp.additionalInformation, Validators.required),
    uniqueNumber: new FormControl(this.qp.uniqueNumber, Validators.required),
    ticketDateSent: new FormControl(toDate(this.qp.ticketDateSent), Validators.required),
    companyActions: new FormControl(this.qp.companyActions, Validators.required)
  });

  valueChanges$ = this.ticketFg.valueChanges.pipe(
    delay(10),
    filter(() => this.ticketFg.enabled),
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
    private ticketsService: TicketsService,
    public dictionariesService: DictionariesService
  ) {
    if (!isEmpty(pickBy(this.ticketFg.value, identity))) this.isModalVisible = true;
  }

  submitTicket(): void {
    if (this.ticketFg.valid) {
      this.isSubmitTicketLoading = true;
      this.submitTicket$ = this.ticketsService.submitTicket(this.ticketFg.value).pipe(
        tap(() => this.tickets$ = this.ticketsService.getTickets()),
        tap(() => this.closeModal()),
        finalize(() => this.isSubmitTicketLoading = false)
      );
    } else markTouchedAndScroll(this.ticketFg);
  }

  deleteTicket(ticket: Ticket): void {
    ticket['isDeleteLoading'] = true;
    this.deleteTicket$ = this.ticketsService.deleteTicket(ticket).pipe(
      tap(() => this.tickets$ = this.ticketsService.getTickets()),
      finalize(() => ticket['isDeleteLoading'] = false)
    );
  }

  openModal(ticket?: Ticket): void {
    this.isModalVisible = true;
    if (ticket) this.ticketFg.patchValue(ticket);
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.ticketFg.enable();
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
    violation: uniq(Array.from({length: randomIntNumber(1, 4)}).map(() => randomIntNumber(1, 4))),
    informer: randomIntNumber() + ' informer ' + randomIntNumber(),
    position: randomIntNumber(1, 4),
    informerGender: ['Мужской', 'Женский'][randomIntNumber(0, 1)],
    informerName: 'Иванов Петр Петрович',
    informerPhone: 79123456789,
    informerPosition: randomIntNumber(1, 4),
    informerEmail: 'ivanov@petr.pt',
    description: randomIntNumber() + ' description ' + randomIntNumber(),
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
