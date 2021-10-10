import { NgModule }                  from '@angular/core';
import { CommonModule }               from '@angular/common';
import { ReactiveFieldModule }        from '@widgets/reactive/reactive-fields/reactive-field';
import { ReactiveTextAreaModule }     from '@widgets/reactive/reactive-fields/reactive-text-area';
import { ReactiveInputModule }        from '@widgets/reactive/reactive-fields/reactive-input';
import { ReactiveSelectModule }       from '@widgets/reactive/reactive-fields/reactive-select';
import { ReactiveCheckBoxModule }     from '@widgets/reactive/reactive-fields/reactive-check-box';
import { NzDividerModule }            from 'ng-zorro-antd/divider';
import { NzButtonModule }             from 'ng-zorro-antd/button';
import { NzIconModule }               from 'ng-zorro-antd/icon';
import { NewQuestionnaireComponent }  from './new-questionnaire.component';
import { QuestionnairePreviewModule } from '../../widgets/questionnaire-preview';

const REACTIVE_FIELDS_MODULES = [
  ReactiveTextAreaModule,
  ReactiveInputModule,
  ReactiveSelectModule,
  ReactiveCheckBoxModule,
  ReactiveFieldModule
];
const ANT_DESIGN_MODULES = [
  NzDividerModule,
  NzButtonModule,
  NzIconModule
];

@NgModule({
  imports: [
    CommonModule,
    QuestionnairePreviewModule,
    REACTIVE_FIELDS_MODULES,
    ANT_DESIGN_MODULES
  ],
  declarations: [NewQuestionnaireComponent]
})
export class NewQuestionnaireModule {
}
