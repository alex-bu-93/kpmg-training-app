import { NgModule }                      from '@angular/core';
import { RouterModule, Routes }          from '@angular/router';
import { LayoutComponent }               from './layout/layout.component';
import { TrainingTwoComponent }          from './views/training-two/training-two.component';
import { TrainingThreeComponent }        from './views/training-three/training-three.component';
import { TrainingFourComponent }         from './views/training-four/training-four.component';
import { TrainingFourDetailedComponent } from './views/training-four/training-four-detailed/training-four-detailed.component';
import { TrainingFiveComponent }         from './views/training-five/training-five.component';
import { NopComponent }                  from './views/nop/nop.component';

const routes: Routes = [
  {path: '', redirectTo: 'training-two', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent, children: [
      {path: 'training-two', component: TrainingTwoComponent},
      {path: 'training-three', component: TrainingThreeComponent},
      {path: 'training-four', component: TrainingFourComponent},
      {path: 'training-four/:id', data: {a: 15}, component: TrainingFourDetailedComponent},
      {path: 'training-five', component: TrainingFiveComponent}
    ]
  },
  {path: '**', component: NopComponent}
  // {path: '**', redirectTo: 'training-two', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
