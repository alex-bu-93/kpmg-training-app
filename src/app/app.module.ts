import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import localeRu               from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule }   from '@angular/common/http';
import { NopComponent }       from './views/nop/nop.component';
import { AppComponent }       from './app.component';
import { AppRoutingModule }   from './app-routing.module';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, NopComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
