import { NgModule }            from '@angular/core';
import { NzLayoutModule }      from 'ng-zorro-antd/layout';
import { NzMenuModule }        from 'ng-zorro-antd/menu';
import { HcmsRoutingModule }   from './hcms-routing.module';
import { HcmsLayoutComponent } from './hcms-layout/hcms-layout.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzMenuModule
];

@NgModule({
  imports: [
    HcmsRoutingModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [HcmsLayoutComponent],
})
export class HcmsModule {
}
