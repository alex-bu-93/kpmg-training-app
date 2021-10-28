import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { ReactiveFieldModule }           from '@widgets/reactive/reactive-fields/reactive-field';
import { NzModalModule }                 from 'ng-zorro-antd/modal';
import { NzButtonModule }                from 'ng-zorro-antd/button';
import { NzDividerModule }               from 'ng-zorro-antd/divider';
import { QuestionnairePreviewComponent } from './questionnaire-preview.component';

const ANT_DESIGN_MODULES = [
  NzModalModule,
  NzButtonModule,
  NzDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFieldModule,
    ANT_DESIGN_MODULES
  ],
  exports: [
    QuestionnairePreviewComponent
  ],
  declarations: [QuestionnairePreviewComponent]
})
export class QuestionnairePreviewModule {
}
