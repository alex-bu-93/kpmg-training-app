import { NgModule }                                       from '@angular/core';
import { BrowserModule }                                  from '@angular/platform-browser';
import { BrowserAnimationsModule }                        from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule }            from '@angular/common/http';
import { registerLocaleData }                             from '@angular/common';
import ru                                                 from '@angular/common/locales/ru';
import { ru as ruDateFnsLocale }                          from 'date-fns/locale';
import { ru_RU, NZ_I18N, NZ_DATE_CONFIG, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import { NzNotificationModule }                           from 'ng-zorro-antd/notification';
import { TokenInterceptor }                               from './interceptors/token.interceptor';
import { DomainInterceptor }                              from './interceptors/domain.interceptor';
import { NopComponent }                                   from './views/nop/nop.component';
import { AppComponent }                                   from './app.component';
import { AppRoutingModule }                               from './app-routing.module';

registerLocaleData(ru);

const ANT_DESIGN_MODULES = [
  NzNotificationModule
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ANT_DESIGN_MODULES
  ],
  providers: [
    {provide: NZ_I18N, useValue: ru_RU},
    {provide: NZ_DATE_CONFIG, useValue: {firstDayOfWeek: 1}},
    {provide: NZ_DATE_LOCALE, useValue: ruDateFnsLocale},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: DomainInterceptor, multi: true},
  ],
  declarations: [AppComponent, NopComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
