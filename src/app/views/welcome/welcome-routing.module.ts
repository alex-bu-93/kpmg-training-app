import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LogonComponent }        from './views/logon/logon.component';
import { RegistrationComponent } from './views/registration/registration.component';

const routes: Routes = [
  {path: '', component: LogonComponent},
  {path: 'registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {
}
