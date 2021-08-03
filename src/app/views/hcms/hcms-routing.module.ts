import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HcmsLayoutComponent }  from './hcms-layout/hcms-layout.component';
import { TicketsComponent }     from './views/tickets';
import { TimesheetComponent }   from './views/timesheet';
import { AnalysisComponent }    from './views/analysis';

const routes: Routes = [
  {
    path: '', component: HcmsLayoutComponent, children: [
      {path: 'tickets', component: TicketsComponent},
      {path: 'timesheet', component: TimesheetComponent},
      {path: 'analysis', component: AnalysisComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HcmsRoutingModule {
}
