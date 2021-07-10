import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import localeRu                             from '@angular/common/locales/ru';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule }                      from '@angular/forms';
import { AppComponent }                     from './app.component';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
