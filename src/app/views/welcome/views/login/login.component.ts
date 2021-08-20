import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router }             from '@angular/router';
import { AuthService }                        from '@services/auth';
import { markTouchedAndScroll }               from '@widgets/reactive/reactive-funcs';
import { finalize, tap }                      from 'rxjs/operators';
import { Observable }                         from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  fg = new FormGroup({
    login: new FormControl(this.route.snapshot.queryParams.login, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  isLoginLoading: boolean;

  login$: Observable<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
  }

  onLogin(): void {
    if (this.fg.valid) {
      this.isLoginLoading = true;
      this.login$ = this.authService.login(this.fg.value).pipe(
        tap(() => this.router.navigate(['/hcms'])),
        finalize(() => this.isLoginLoading = false)
      );
    } else markTouchedAndScroll(this.fg);
  }
}
