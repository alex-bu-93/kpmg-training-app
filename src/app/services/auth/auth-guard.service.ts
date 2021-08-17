import { Injectable }                                                       from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of }                                                   from 'rxjs';
import { switchMap }                                                        from 'rxjs/operators';
import { AuthService }                                                      from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return true;
    // return this.authService.isValidToken(this.authService.token).pipe(
    //   switchMap(isLoggedIn => {
    //     if (isLoggedIn && (route.routeConfig.path === 'welcome')) this.router.navigate(['hcms']);
    //     if (!isLoggedIn && (route.routeConfig.path === 'hcms')) this.router.navigate(['welcome']);
    //     return of(true);
    //   })
    // );
  }
}
