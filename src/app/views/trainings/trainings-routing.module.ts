import { NgModule }                      from '@angular/core';
import { RouterModule, Routes }          from '@angular/router';
import { TrainingTwoComponent }          from './views/training-two/training-two.component';
import { TrainingThreeComponent }        from './views/training-three/training-three.component';
import { TrainingFourComponent }         from './views/training-four/training-four.component';
import { TrainingFourDetailedComponent } from './views/training-four/training-four-detailed/training-four-detailed.component';
import { TrainingSixComponent }          from './views/training-six/training-six.component';
import { TrainingFiveComponent }         from './views/training-five/training-five.component';
import { LayoutComponent }               from './layout/layout.component';

const routes: Routes = [
  {path: '', redirectTo: 'training-two', pathMatch: 'full'},
  {
    path: '', component: LayoutComponent, children: [
      {path: 'training-two', component: TrainingTwoComponent},
      {path: 'training-three', component: TrainingThreeComponent},
      {path: 'training-four', component: TrainingFourComponent},
      {path: 'training-four/:id', data: {a: 15}, component: TrainingFourDetailedComponent},
      {path: 'training-five', component: TrainingFiveComponent},
      {path: 'training-six', component: TrainingSixComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule {
}
