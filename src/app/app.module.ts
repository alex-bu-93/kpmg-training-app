import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeRu                    from '@angular/common/locales/ru';
import { registerLocaleData }      from '@angular/common';
import { HttpClientModule }        from '@angular/common/http';
import { ru_RU, NZ_I18N }          from 'ng-zorro-antd/i18n';
import { NopComponent }            from './views/nop/nop.component';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: NZ_I18N, useValue: ru_RU}],
  declarations: [AppComponent, NopComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
