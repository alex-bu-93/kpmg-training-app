import { NgModule }                       from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';
import { FormConstructorLayoutComponent } from './form-constructor-layout';
import { QuestionnairesComponent }        from './views/questionnaires';
import { NewQuestionnaireComponent }      from './views/new-questionnaire';

const routes: Routes = [
  {path: '', redirectTo: 'questionnaires', pathMatch: 'full'},
  {
    path: '', component: FormConstructorLayoutComponent, children: [
      {path: 'questionnaires', component: QuestionnairesComponent},
      {path: 'new-questionnaire', component: NewQuestionnaireComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsConstructorRoutingModule {
}
