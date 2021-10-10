import { NgModule }                       from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { RouterModule }                   from '@angular/router';
import { FormConstructorLayoutComponent } from './form-constructor-layout.component';

const ANT_DESIGN_MODULES = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [FormConstructorLayoutComponent]
})
export class FormConstructorLayoutModule {
}
