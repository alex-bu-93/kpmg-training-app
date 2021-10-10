import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { ReactiveFormsModule }       from '@angular/forms';
import { NzCheckboxModule }          from 'ng-zorro-antd/checkbox';
import { NzFormModule }              from 'ng-zorro-antd/form';
import { ReactiveCheckBoxComponent } from './reactive-check-box.component';
import { ReactiveInfoModule }        from '../../reactive-info';

const ANT_DESIGN_MODULES = [
  NzCheckboxModule,
  NzFormModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveInfoModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [ReactiveCheckBoxComponent],
  exports: [ReactiveCheckBoxComponent]
})
export class ReactiveCheckBoxModule {
}
