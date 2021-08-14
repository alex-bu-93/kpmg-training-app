import { NgModule }                            from '@angular/core';
import { BrowserModule }                       from '@angular/platform-browser';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import localeRu                                from '@angular/common/locales/ru';
import { registerLocaleData }                  from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ru_RU, NZ_I18N }                      from 'ng-zorro-antd/i18n';
import { TokenInterceptor }                    from './interceptors/token.interceptor';
import { DomainInterceptor }                   from './interceptors/domain.interceptor';
import { NopComponent }                        from './views/nop/nop.component';
import { AppComponent }                        from './app.component';
import { AppRoutingModule }                    from './app-routing.module';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: ru_RU},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: DomainInterceptor, multi: true},
  ],
  declarations: [AppComponent, NopComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
