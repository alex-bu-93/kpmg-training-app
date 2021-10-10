import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard }                               from '@services/auth';
import { NopComponent }                            from './views/nop/nop.component';

const routes: Routes = [
  {path: '', redirectTo: 'hcms', pathMatch: 'full'},
  {
    path: 'welcome',
    loadChildren: () => import('./views/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'hcms',
    loadChildren: () => import('./views/hcms/hcms.module').then(m => m.HcmsModule),
    canActivate: [AuthGuard]
  },
  {path: 'forms-constructor', loadChildren: () => import('./views/forms-constructor').then(m => m.FormsConstructorModule)},
  {path: 'trainings', loadChildren: () => import('./views/trainings/trainings.module').then(m => m.TrainingsModule)},
  {path: '**', component: NopComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
