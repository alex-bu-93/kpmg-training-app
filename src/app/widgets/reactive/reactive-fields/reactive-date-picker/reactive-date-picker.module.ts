import { NgModule }                    from '@angular/core';
import { CommonModule }                from '@angular/common';
import { ReactiveFormsModule }         from '@angular/forms';
import { NzFormModule }                from 'ng-zorro-antd/form';
import { NzDatePickerModule }          from 'ng-zorro-antd/date-picker';
import { ReactiveDatePickerComponent } from './reactive-date-picker.component';
import { ReactiveInfoModule }          from '../../reactive-info';

const FORM_MODULES = [ReactiveFormsModule];
const ANT_DESIGN_MODULES = [NzFormModule, NzDatePickerModule];

@NgModule({
  imports: [CommonModule, ReactiveInfoModule, FORM_MODULES, ANT_DESIGN_MODULES],
  declarations: [ReactiveDatePickerComponent],
  exports: [ReactiveDatePickerComponent]
})
export class ReactiveDatePickerModule {
}
