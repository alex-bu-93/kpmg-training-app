import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { NzButtonModule }          from 'ng-zorro-antd/button';
import { NzResultModule }          from 'ng-zorro-antd/result';
import { NzSpinModule }            from 'ng-zorro-antd/spin';
import { RequestWrapperComponent } from './request-wrapper.component';
import { WithLoadingPipeModule }   from './with-loading-pipe.module';
import { LocalSpinnerModule }      from '@widgets/local-spinner';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzResultModule,
  NzSpinModule
];

@NgModule({
  imports: [
    CommonModule,
    LocalSpinnerModule,
    WithLoadingPipeModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [RequestWrapperComponent],
  exports: [RequestWrapperComponent]
})
export class RequestWrapperModule {
}
