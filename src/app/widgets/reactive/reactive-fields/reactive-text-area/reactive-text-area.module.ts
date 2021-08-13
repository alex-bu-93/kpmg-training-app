import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { ReactiveFormsModule }       from '@angular/forms';
import { NzFormModule }              from 'ng-zorro-antd/form';
import { NzInputModule }             from 'ng-zorro-antd/input';
import { ReactiveTextAreaComponent } from './reactive-text-area.component';
import { ReactiveInfoModule }        from '../../reactive-info';

const FORM_MODULES = [ReactiveFormsModule];
const ANT_DESIGN_MODULES = [NzFormModule, NzInputModule];

@NgModule({
  imports: [CommonModule, ReactiveInfoModule, FORM_MODULES, ANT_DESIGN_MODULES],
  declarations: [ReactiveTextAreaComponent],
  exports: [ReactiveTextAreaComponent]
})
export class ReactiveTextAreaModule {
}
