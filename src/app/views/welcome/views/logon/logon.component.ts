import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { markTouchedAndScroll }   from '@widgets/reactive/reactive-funcs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService }               from '@services/auth';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Observable, throwError }    from 'rxjs';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html'
})
export class LogonComponent {

  fg = new FormGroup({
    logon: new FormControl(this.route.snapshot.queryParams.logon, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  isLogonLoading: boolean;

  logon$: Observable<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  onLogon(): void {
    if (this.fg.valid) {
      this.isLogonLoading = true;
      this.logon$ = this.authService.logon(this.fg.value).pipe(
        tap(res => console.log(res)),
        tap(() => this.router.navigate(['/hcms'])),
        finalize(() => this.isLogonLoading = false)
      );
    } else markTouchedAndScroll(this.fg);
  }
}
