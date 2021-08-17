import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ReactiveInputModule }     from '@widgets/reactive/reactive-fields/reactive-input';
import { ValidationMessageModule } from '@widgets/validation-message';
import { NzButtonModule }          from 'ng-zorro-antd/button';
import { NzCardModule }            from 'ng-zorro-antd/card';
import { RegistrationComponent }   from './views/registration/registration.component';
import { LoginComponent }          from './views/login/login.component';
import { WelcomeRoutingModule }    from './welcome-routing.module';

const REACTIVE_FORMS_MODULES = [
  ReactiveInputModule
];
const ANT_DESIGN_MODULES = [
  NzButtonModule,
  NzCardModule
];

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    ValidationMessageModule,
    ANT_DESIGN_MODULES,
    REACTIVE_FORMS_MODULES
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent
  ]
})
export class WelcomeModule {
}
