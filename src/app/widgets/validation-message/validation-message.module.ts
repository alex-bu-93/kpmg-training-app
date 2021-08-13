import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { ValidationMessageComponent } from './validation-message.component';


@NgModule({
  imports: [CommonModule],
  exports: [ValidationMessageComponent],
  declarations: [ValidationMessageComponent],
})
export class ValidationMessageModule { }
