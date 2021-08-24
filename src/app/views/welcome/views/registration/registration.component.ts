import { Component }                                      from '@angular/core';
import { FormControl, FormGroup, Validators }             from '@angular/forms';
import { Router }                                         from '@angular/router';
import { AuthService }                                    from '@services/auth';
import { markTouchedAndScroll, passwordConfirmValidator } from '@widgets/reactive/reactive-funcs';
import { Observable }                                     from 'rxjs';
import { finalize, tap }                                  from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  fg = new FormGroup({
    login: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirm: new FormControl(null, Validators.required),
  }, passwordConfirmValidator('password', 'confirm'));

  postUser$: Observable<any>;
  isPostUserLoading: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  onRegistration(): void {
    if (this.fg.valid) {
      this.isPostUserLoading = true;
      this.postUser$ = this.authService.postUser(this.fg.value).pipe(
        tap(() => this.router.navigate(['/welcome'], {queryParams: {login: this.fg.value.login}})),
        finalize(() => this.isPostUserLoading = false)
      );
    } else markTouchedAndScroll(this.fg);
  }
}
