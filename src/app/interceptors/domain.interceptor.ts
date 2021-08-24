import { Injectable }                                           from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { environment }                                          from '@environments/environment';
import { Observable }                                           from 'rxjs';

@Injectable()
export class DomainInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url = `${environment.api}/${request.url}`;
    request = request.clone({url});
    return next.handle(request);
  }
}
