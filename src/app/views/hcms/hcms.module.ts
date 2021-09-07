import { NgModule }          from '@angular/core';
import { TicketsModule }     from './views/tickets';
import { AnalysisModule }    from './views/analysis';
import { TimesheetModule }   from './views/timesheet';
import { HcmsLayoutModule }  from './hcms-layout';
import { HcmsRoutingModule } from './hcms-routing.module';

@NgModule({
  imports: [
    HcmsRoutingModule,
    HcmsLayoutModule,
    TicketsModule,
    AnalysisModule,
    TimesheetModule,
  ]
})
export class HcmsModule {
}
