import { NgModule }                      from '@angular/core';
import { FormConstructorLayoutModule }   from './form-constructor-layout';
import { NewQuestionnaireModule }        from './views/new-questionnaire';
import { FormsConstructorRoutingModule } from './forms-constructor-routing.module';

@NgModule({
  imports: [
    FormConstructorLayoutModule,
    NewQuestionnaireModule,
    FormsConstructorRoutingModule
  ]
})
export class FormsConstructorModule {
}
