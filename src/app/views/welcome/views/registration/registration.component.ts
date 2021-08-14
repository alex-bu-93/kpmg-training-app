import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { markTouchedAndScroll }               from '@widgets/reactive/reactive-funcs';
import { AuthService }                        from '@services/auth';
import { finalize, tap }                      from 'rxjs/operators';
import { Observable }                         from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  fg = new FormGroup({
    logon: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  isPostUserLoading: boolean;

  postUser$: Observable<any>;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  onRegistration(): void {
    if (this.fg.valid) {
      this.isPostUserLoading = true;
      this.postUser$ = this.authService.postUser(this.fg.value).pipe(
        tap(() => this.router.navigate(['/welcome'], {queryParams: {logon: this.fg.value.logon}})),
        finalize(() => this.isPostUserLoading = false)
      );
    } else markTouchedAndScroll(this.fg);
  }
}
