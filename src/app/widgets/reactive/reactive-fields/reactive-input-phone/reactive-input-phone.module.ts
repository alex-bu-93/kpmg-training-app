import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumbersOnlyDirectiveModule }       from '@directives/numbers-only';
import { PhonePipeModule }                  from '@pipes/phone';
import { NzInputModule }                    from 'ng-zorro-antd/input';
import { NzFormModule }                     from 'ng-zorro-antd/form';
import { NzIconModule }                     from 'ng-zorro-antd/icon';
import { ReactiveInputPhoneComponent }      from './reactive-input-phone.component';
import { ReactiveInfoModule }               from '../../reactive-info';

const FORM_MODULES = [
  ReactiveFormsModule
];
const ANT_DESIGN_MODULES = [
  NzFormModule,
  NzInputModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveInfoModule,
    PhonePipeModule,
    FormsModule,
    NumbersOnlyDirectiveModule,
    FORM_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [ReactiveInputPhoneComponent],
  exports: [ReactiveInputPhoneComponent]
})
export class ReactiveInputPhoneModule {
}
