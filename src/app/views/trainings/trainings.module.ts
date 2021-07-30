import { NgModule }                  from '@angular/core';
import { CommonModule }              from '@angular/common';
import { FormsModule }               from '@angular/forms';
import { TrainingsRoutingModule }    from './trainings-routing.module';
import { LayoutComponent }           from './layout/layout.component';
import { TrainingTwoComponent }      from './views/training-two/training-two.component';
import { TrainingThreeComponent }    from './views/training-three/training-three.component';
import { TrainingFourComponent }     from './views/training-four/training-four.component';
import { TrainingFiveComponent }     from './views/training-five/training-five.component';
import { TrainingSixComponent }      from './views/training-six/training-six.component';
import { ParentComponent }           from './views/training-three/parent/parent.component';
import { InputAsAttributeComponent } from './views/training-three/input-as-attribute/input-as-attribute.component';
import { ChildComponent }            from './views/training-three/child/child.component';
import { NzButtonModule }            from 'ng-zorro-antd/button';

const ANT_DESIGN_MODULES = [
  NzButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TrainingsRoutingModule,
    ANT_DESIGN_MODULES
  ],
  declarations: [
    TrainingTwoComponent,
    TrainingThreeComponent,
    TrainingFourComponent,
    TrainingFiveComponent,
    TrainingSixComponent,
    ParentComponent,
    InputAsAttributeComponent,
    ChildComponent,
    LayoutComponent
  ]
})
export class TrainingsModule {
}
