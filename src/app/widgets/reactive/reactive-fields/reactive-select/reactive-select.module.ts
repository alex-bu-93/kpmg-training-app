import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ReactiveFormsModule }     from '@angular/forms';
import { NzFormModule }            from 'ng-zorro-antd/form';
import { NzSelectModule }          from 'ng-zorro-antd/select';
import { ReactiveSelectComponent } from './reactive-select.component';
import { ReactiveInfoModule }      from '../../reactive-info';

const FORM_MODULES = [ReactiveFormsModule];
const ANT_DESIGN_MODULES = [NzFormModule, NzSelectModule];

@NgModule({
  imports: [CommonModule, ReactiveInfoModule, FORM_MODULES, ANT_DESIGN_MODULES],
  declarations: [ReactiveSelectComponent],
  exports: [ReactiveSelectComponent]
})
export class ReactiveSelectModule {
}
