import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ReactiveFieldComponent }   from './reactive-field.component';
import { ReactiveInputModule }      from '../reactive-input';
import { ReactiveTextAreaModule }   from '../reactive-text-area';
import { ReactiveDatePickerModule } from '../reactive-date-picker';
import { ReactiveCheckBoxModule }   from '../reactive-check-box';

const REACTIVE_FIELDS_MODULES = [
  ReactiveInputModule,
  ReactiveTextAreaModule,
  ReactiveDatePickerModule,
  ReactiveCheckBoxModule
];

@NgModule({
  imports: [
    CommonModule,
    REACTIVE_FIELDS_MODULES
  ],
  exports: [
    ReactiveFieldComponent
  ],
  declarations: [ReactiveFieldComponent]
})
export class ReactiveFieldModule {
}
