import { NgModule }                     from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { CommonModule }                 from '@angular/common';
import { RequestWrapperModule }         from '@widgets/request-wrapper';
import { ReactiveSelectModule }         from '@widgets/reactive/reactive-fields/reactive-select';
import { ReactiveDatePickerModule }     from '@widgets/reactive/reactive-fields/reactive-date-picker';
import { ReactiveTextAreaModule }       from '@widgets/reactive/reactive-fields/reactive-text-area';
import { ReactiveInputModule }          from '@widgets/reactive/reactive-fields/reactive-input';
import { ReactiveInputPhoneModule }     from '@widgets/reactive/reactive-fields/reactive-input-phone';
import { ReactiveTimePickerModule }     from '@widgets/reactive/reactive-fields/reactive-time-picker';
import { ReactiveMultipleSelectModule } from '@widgets/reactive/reactive-fields/reacitve-multiple-select';
import { NzTableModule }                from 'ng-zorro-antd/table';
import { NzButtonModule }               from 'ng-zorro-antd/button';
import { NzIconModule }                 from 'ng-zorro-antd/icon';
import { NzTypographyModule }           from 'ng-zorro-antd/typography';
import { NzModalModule }                from 'ng-zorro-antd/modal';
import { NzDividerModule }              from 'ng-zorro-antd/divider';
import { NzPopconfirmModule }           from 'ng-zorro-antd/popconfirm';
import { TicketsComponent }             from './tickets.component';

const REACTIVE_FIELDS_MODULES = [
  ReactiveSelectModule,
  ReactiveDatePickerModule,
  ReactiveTextAreaModule,
  ReactiveInputModule,
  ReactiveInputPhoneModule,
  ReactiveTimePickerModule,
  ReactiveMultipleSelectModule
];
const ANT_DESIGN_MODULES = [
  NzTableModule,
  NzButtonModule,
  NzIconModule,
  NzTypographyModule,
  NzModalModule,
  NzDividerModule,
  NzPopconfirmModule
];

@NgModule({
  imports: [
    CommonModule,
    RequestWrapperModule,
    ReactiveFormsModule,
    REACTIVE_FIELDS_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [TicketsComponent]
})
export class TicketsModule {
}
