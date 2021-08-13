import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ReactiveFormsModule }     from '@angular/forms';
import { ValidationMessageModule } from '@widgets/validation-message';
import { ReactiveInputModule }     from '@widgets/reactive/reactive-fields/reactive-input';
import { NzButtonModule }          from 'ng-zorro-antd/button';
import { NzModalModule }           from 'ng-zorro-antd/modal';
import { NzInputModule }           from 'ng-zorro-antd/input';
import { NzFormModule }            from 'ng-zorro-antd/form';
import { NzDividerModule }         from 'ng-zorro-antd/divider';
import { LoginComponent }          from './login.component';

const REACTIVE_MODULES = [
  ReactiveInputModule
];

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzModalModule,
  NzInputModule,
  NzFormModule,
  NzDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    REACTIVE_MODULES,
    ANT_DESIGN_MODULES,
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class LoginModule {
}
