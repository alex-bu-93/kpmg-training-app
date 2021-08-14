import { Injectable }                                                        from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { AuthService }                                                       from '@services/auth';
import { Observable }                                                        from 'rxjs';
import isEmpty                                                               from 'lodash/isEmpty';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers = isEmpty(request.headers.keys()) ? new HttpHeaders() : request.headers;
    if (this.authService.token) headers = headers.set('Authorization', 'Bearer ' + this.authService.token);
    request = request.clone({headers});
    return next.handle(request).pipe(
      // response handle
    );
  }
}
