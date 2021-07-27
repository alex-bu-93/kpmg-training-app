import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import localeRu                             from '@angular/common/locales/ru';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule }                 from '@angular/common/http';
import { FormsModule }                      from '@angular/forms';
import { AppComponent }                     from './app.component';
import { AppRoutingModule }                 from './app-routing.module';
import { ParentComponent }                  from './views/training-three/parent/parent.component';
import { ChildComponent }                   from './views/training-three/child/child.component';
import { InputAsAttributeComponent }        from './views/training-three/input-as-attribute/input-as-attribute.component';
import { TrainingTwoComponent }             from './views/training-two/training-two.component';
import { TrainingThreeComponent }           from './views/training-three/training-three.component';
import { TrainingFourComponent }            from './views/training-four/training-four.component';
import { TrainingFourDetailedComponent }    from './views/training-four/training-four-detailed/training-four-detailed.component';
import { TrainingFiveComponent }            from './views/training-five/training-five.component';
import { TrainingSixComponent }             from './views/training-six/training-six.component';
import { LayoutComponent }                  from './layout/layout.component';
import { NopComponent }                     from './views/nop/nop.component';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    InputAsAttributeComponent,
    LayoutComponent,
    TrainingTwoComponent,
    TrainingThreeComponent,
    TrainingFourComponent,
    TrainingFiveComponent,
    TrainingSixComponent,
    TrainingFourDetailedComponent,
    NopComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
