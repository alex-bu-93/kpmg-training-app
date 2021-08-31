import { NgModule }                          from '@angular/core';
import { CommonModule }                      from '@angular/common';
import { ReactiveFormsModule }               from '@angular/forms';
import { ReactiveInputModule }               from '@widgets/reactive/reactive-fields/reactive-input';
import { ReactiveDatePickerModule }          from '@widgets/reactive/reactive-fields/reactive-date-picker';
import { ReactiveTextAreaModule }            from '@widgets/reactive/reactive-fields/reactive-text-area';
import { ReactiveSelectModule }              from '@widgets/reactive/reactive-fields/reactive-select';
import { ReactiveTimePickerModule }          from '@widgets/reactive/reactive-fields/reactive-time-picker';
import { ReactiveInputPhoneModule }          from '@widgets/reactive/reactive-fields/reactive-input-phone';
import { ReactiveMultipleSelectModule }      from '@widgets/reactive/reactive-fields/reacitve-multiple-select';
import { RequestWrapperModule }              from '@widgets/request-wrapper';
import { NzLayoutModule }                    from 'ng-zorro-antd/layout';
import { NzTabsModule }                      from 'ng-zorro-antd/tabs';
import { NzButtonModule }                    from 'ng-zorro-antd/button';
import { NzTableModule }                     from 'ng-zorro-antd/table';
import { NzIconModule }                      from 'ng-zorro-antd/icon';
import { NzModalModule }                     from 'ng-zorro-antd/modal';
import { NzTypographyModule }                from 'ng-zorro-antd/typography';
import { NzInputModule }                     from 'ng-zorro-antd/input';
import { NzPopconfirmModule }                from 'ng-zorro-antd/popconfirm';
import { NzDividerModule }                   from 'ng-zorro-antd/divider';
import { TicketsComponent }                  from './views/tickets';
import { TimesheetComponent }                from './views/timesheet';
import { AnalysisComponent }                 from './views/analysis';
import { HcmsLayoutComponent }               from './hcms-layout';
import { HcmsRoutingModule }                 from './hcms-routing.module';

const REACTIVE_FIELDS_MODULES = [
  ReactiveInputModule,
  ReactiveDatePickerModule,
  ReactiveTextAreaModule,
  ReactiveSelectModule,
  ReactiveTimePickerModule,
  ReactiveInputPhoneModule,
  ReactiveMultipleSelectModule
];
const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzTabsModule,
  NzButtonModule,
  NzTableModule,
  NzIconModule,
  NzModalModule,
  NzTypographyModule,
  NzInputModule,
  NzPopconfirmModule,
  NzDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HcmsRoutingModule,
    RequestWrapperModule,
    REACTIVE_FIELDS_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    HcmsLayoutComponent,
    TicketsComponent,
    TimesheetComponent,
    AnalysisComponent
  ]
})
export class HcmsModule {
}
