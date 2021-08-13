import { NgModule }                        from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { ReactiveFormsModule }             from '@angular/forms';
import { NzFormModule }                    from 'ng-zorro-antd/form';
import { NzSelectModule }                  from 'ng-zorro-antd/select';
import { NzIconModule }                    from 'ng-zorro-antd/icon';
import { ReactiveMultipleSelectComponent } from './reactive-multiple-select.component';
import { ReactiveInfoModule }              from '../../reactive-info';

const FORM_MODULES = [
  ReactiveFormsModule
];
const ANT_DESIGN_MODULES = [
  NzFormModule,
  NzSelectModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveInfoModule,
    FORM_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [ReactiveMultipleSelectComponent],
  exports: [ReactiveMultipleSelectComponent]
})
export class ReactiveMultipleSelectModule {
}
