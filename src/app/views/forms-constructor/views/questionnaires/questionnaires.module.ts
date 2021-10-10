import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { RouterModule }               from '@angular/router';
import { RequestWrapperModule }       from '@widgets/request-wrapper';
import { NzButtonModule }             from 'ng-zorro-antd/button';
import { NzTableModule }              from 'ng-zorro-antd/table';
import { QuestionnairesComponent }    from './questionnaires.component';
import { QuestionnairePreviewModule } from '../../widgets/questionnaire-preview';

const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzTableModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RequestWrapperModule,
    QuestionnairePreviewModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [QuestionnairesComponent]
})
export class QuestionnairesModule {
}
