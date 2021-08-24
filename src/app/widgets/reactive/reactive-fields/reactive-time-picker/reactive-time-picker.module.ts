import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { ReactiveFormsModule }         from '@angular/forms';
import { NzFormModule }                from 'ng-zorro-antd/form';
import { NzTimePickerModule }          from 'ng-zorro-antd/time-picker';
import { ReactiveTimePickerComponent } from './reactive-time-picker.component';
import { ReactiveInfoModule }          from '../../reactive-info';

const ANT_DESIGN_MODULES = [
  NzFormModule,
  NzTimePickerModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveInfoModule,
    ReactiveFormsModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [ReactiveTimePickerComponent],
  exports: [ReactiveTimePickerComponent]
})
export class ReactiveTimePickerModule {
}
