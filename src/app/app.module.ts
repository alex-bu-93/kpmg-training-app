import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import localeRu                             from '@angular/common/locales/ru';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { AppComponent }                     from './app.component';
import { ParentComponent }                  from './views/training-three/parent/parent.component';
import { ChildComponent }                   from './views/training-three/child/child.component';
import { InputAsAttributeComponent }        from './views/training-three/input-as-attribute/input-as-attribute.component';
import { AppRoutingModule }                 from './app-routing.module';
import { TrainingTwoComponent }             from './views/training-two/training-two.component';
import { TrainingThreeComponent }           from './views/training-three/training-three.component';
import { TrainingFourComponent }            from './views/training-four/training-four.component';
import { LayoutComponent }                  from './layout/layout.component';
import { TrainingFourDetailedComponent } from './views/training-four/training-four-detailed/training-four-detailed.component';
import { NopComponent } from './views/nop/nop.component';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    InputAsAttributeComponent,
    TrainingTwoComponent,
    TrainingThreeComponent,
    TrainingFourComponent,
    LayoutComponent,
    TrainingFourDetailedComponent,
    NopComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
