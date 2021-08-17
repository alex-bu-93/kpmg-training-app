import { Component }                                                         from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router }                                                            from '@angular/router';
import { AuthService }                                                       from '@services/auth';
import { markTouchedAndScroll }                                              from '@widgets/reactive/reactive-funcs';
import { Observable }                                                        from 'rxjs';
import { finalize, tap }                                                     from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  fg = new FormGroup({
    login: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    confirm: new FormControl(null, Validators.required),
  }, this.checkPasswordConfirm1('password', 'confirm'));

  isPostUserLoading: boolean;

  postUser$: Observable<any>;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  // Способы валидации пароля
  // 1. Ошибка выбрасывается в контрол
  checkPasswordConfirm1(controlName: string, matchingControlName: string): ValidatorFn {
    return (fg: FormGroup): any => {
      const ctrlValue = fg.controls[controlName].value;
      const matchingCtrl = fg.controls[matchingControlName];
      matchingCtrl.setErrors(matchingCtrl.value
        ? (ctrlValue === matchingCtrl.value ? null : {customError: 'Пароли не совпадают'})
        : {required: true}
      );
    };
  }

  // 2. Ошибка выбрасывается в формГруппу
  checkPasswordConfirm2(fg: FormGroup): ValidationErrors | null {
    const passwordValue = fg.value['password'];
    const confirmValue = fg.value['confirm'];
    return confirmValue ? (passwordValue === confirmValue ? null : {notConfirm: true}) : null;
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
