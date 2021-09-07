import { ActivatedRoute }                                                     from '@angular/router';
import { RouterTestingModule }                                                from '@angular/router/testing';
import { RequestWrapperComponent }                                            from '@widgets/request-wrapper/request-wrapper.component';
import { ReactiveSelectComponent }                                            from '@widgets/reactive/reactive-fields/reactive-select';
import { ReactiveDatePickerComponent }                                        from '@widgets/reactive/reactive-fields/reactive-date-picker';
import { ReactiveTextAreaComponent }                                          from '@widgets/reactive/reactive-fields/reactive-text-area';
import { ReactiveMultipleSelectComponent }                                    from '@widgets/reactive/reactive-fields/reacitve-multiple-select';
import { ReactiveTimePickerComponent }                                        from '@widgets/reactive/reactive-fields/reactive-time-picker';
import { ReactiveInputComponent }                                             from '@widgets/reactive/reactive-fields/reactive-input';
import { ReactiveInputPhoneComponent }                                        from '@widgets/reactive/reactive-fields/reactive-input-phone';
import { isMockOf, MockBuilder, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';
import { NzModalComponent, NzModalContentDirective }                          from 'ng-zorro-antd/modal';
import { NzTableComponent }                                                   from 'ng-zorro-antd/table';
import { of }                                                                 from 'rxjs';
import { TicketsComponent }                                                   from './tickets.component';
import { TicketsModule }                                                      from './tickets.module';
import { TicketsService }                                                     from './tickets.service';

describe('TicketsComponent', () => {

  let fixture: MockedComponentFixture<TicketsComponent>;
  let requestWrapper: RequestWrapperComponent;

  beforeEach(() => MockBuilder(TicketsComponent, TicketsModule)
    .mock(RequestWrapperComponent)
    .mock(TicketsService, {getTickets$: () => of([{}, {}]) as any})
    .mock(ActivatedRoute, {snapshot: {queryParams: {}} as any})
    .mock(RouterTestingModule)
  );

  beforeEach(() => {
    fixture = MockRender(TicketsComponent);
    requestWrapper = ngMocks.find(RequestWrapperComponent).componentInstance;
  });

  it('should create tickets component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have request wrapper', () => {
    expect(requestWrapper).toBeTruthy();
  });

  it('should have button', () => {
    expect(ngMocks.find('button')).toBeTruthy();
  });

  it('should have New Ticket button', () => {
    expect(ngMocks.find('button').nativeElement.innerHTML).toContain('Новое обращение');
  });

  it('should have class "btn-outline-success" in New Ticket button', () => {
    expect(ngMocks.find('button').nativeElement.getAttribute('class')).toContain('btn-outline-success');
  });

  it('should have nz-table', () => {
    expect(ngMocks.find(NzTableComponent)).toBeTruthy();
  });

  it('should have 8 cols in nz-table', () => {
    const table = ngMocks.find(NzTableComponent);
    expect(Array.from(table.nativeElement.querySelectorAll('thead tr th')).length).toBe(8);
  });

  it('should have fixed cols names in nz-table', () => {
    const table = ngMocks.find(NzTableComponent);
    Array.from(table.nativeElement.querySelectorAll('thead tr th')).forEach((x: HTMLElement) => {
      expect([
        '#',
        'Категория',
        'Нарушение',
        'Дата',
        'Канал связи',
        'Информатор',
        'Описание',
        'Дата репорта'
      ]).toContain(x.innerText);
    });
  });

  it('should open modal on click and have at least one of imported fields', () => {
    const modalDirective = ngMocks.findInstance(ngMocks.find(NzModalComponent), NzModalContentDirective);
    if (isMockOf(modalDirective, NzModalContentDirective, 'd')) modalDirective.__render();
    ngMocks.click('button');
    fixture.detectChanges();
    [
      ReactiveSelectComponent,
      ReactiveDatePickerComponent,
      ReactiveTextAreaComponent,
      ReactiveInputComponent,
      ReactiveInputPhoneComponent,
      ReactiveTimePickerComponent,
      ReactiveMultipleSelectComponent
    ].forEach(x => expect(ngMocks.find(x)).toBeTruthy());
  });
});
