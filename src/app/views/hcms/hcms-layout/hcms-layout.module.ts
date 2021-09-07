import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';
import { CommonModule }         from '@angular/common';
import { RequestWrapperModule } from '@widgets/request-wrapper';
import { NzLayoutModule }       from 'ng-zorro-antd/layout';
import { NzTabsModule }         from 'ng-zorro-antd/tabs';
import { HcmsLayoutComponent }  from './hcms-layout.component';

const ANT_DESIGN_MODULES = [
  NzLayoutModule,
  NzTabsModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RequestWrapperModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [HcmsLayoutComponent]
})
export class HcmsLayoutModule {
}
