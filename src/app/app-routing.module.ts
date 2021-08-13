import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NopComponent }                            from './views/nop/nop.component';

const routes: Routes = [
  {path: '', redirectTo: 'hcms', pathMatch: 'full'},
  {path: 'hcms', loadChildren: () => import('./views/hcms/hcms.module').then(m => m.HcmsModule)},
  {path: 'trainings', loadChildren: () => import('./views/trainings/trainings.module').then(m => m.TrainingsModule)},
  {path: '**', component: NopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
