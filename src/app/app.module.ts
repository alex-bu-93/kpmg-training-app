import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import localeRu                             from '@angular/common/locales/ru';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { AppComponent }                     from './app.component';
import { ParentComponent }                  from './parent/parent.component';
import { ChildComponent }                   from './child/child.component';
import { InputAsAttributeComponent }        from './input-as-attribute/input-as-attribute.component';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent, ParentComponent, ChildComponent, InputAsAttributeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
