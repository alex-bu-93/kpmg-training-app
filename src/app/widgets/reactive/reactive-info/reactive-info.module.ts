import { NgModule }                                                          from '@angular/core';
import { CommonModule }                                                      from '@angular/common';
import { NzIconModule }                                                      from 'ng-zorro-antd/icon';
import { NzToolTipModule }                                                   from 'ng-zorro-antd/tooltip';
import { ReactiveLabelComponent }                                            from './reactive-label';
import { ReactiveSubLabelComponent }                                         from './reactive-sub-label';
import { ReactiveValidationMessageComponent, ReactiveValidationMessagePipe } from './reactive-validation-message';

const ANT_DESIGN_MODULES = [
  NzIconModule,
  NzToolTipModule
];
const FIELD_INFO_COMPONENTS = [
  ReactiveLabelComponent,
  ReactiveSubLabelComponent,
  ReactiveValidationMessageComponent
];

@NgModule({
  imports: [
    CommonModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    ReactiveValidationMessagePipe,
    FIELD_INFO_COMPONENTS
  ],
  exports: [
    FIELD_INFO_COMPONENTS
  ]
})
export class ReactiveInfoModule {
}
