import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HcmsLayoutComponent }  from './hcms-layout/hcms-layout.component';

const routes: Routes = [
  {
    path: '', component: HcmsLayoutComponent, children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HcmsRoutingModule {
}
