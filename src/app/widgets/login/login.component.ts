import { Component }                                                         from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NzNotificationService }                                             from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  isModalVisible: boolean;

  fg1 = new FormGroup({
    password1: new FormControl(null, Validators.required),
    confirm1: new FormControl(null, Validators.required)
  }, this.checkPasswordConfirm1);
  fg2 = new FormGroup({
    password2: new FormControl(null, Validators.required),
    confirm2: new FormControl(null, Validators.required)
  }, this.checkPasswordConfirm2('password2', 'confirm2'));

  constructor(
    private notification: NzNotificationService
  ) {
  }

  // Способы валидации пароля
  // 1. Ошибка выбрасывается в формГруппу
  checkPasswordConfirm1(fg: FormGroup): ValidationErrors | null {
    const passwordValue = fg.value['password1'];
    const confirmValue = fg.value['confirm1'];
    return confirmValue ? (passwordValue === confirmValue ? null : {notConfirm: true}) : null;
  }

  // 2. Ошибка выбрасывается в контрол
  checkPasswordConfirm2(controlName: string, matchingControlName: string): ValidatorFn {
    return (fg: FormGroup): any => {
      const ctrlValue = fg.controls[controlName].value;
      const matchingCtrl = fg.controls[matchingControlName];
      matchingCtrl.setErrors(matchingCtrl.value
        ? (ctrlValue === matchingCtrl.value ? null : {customError: 'Пароли не совпадают'})
        : {required: true}
      );
    };
  }

  submitForm(fg: FormGroup): void {
    if (fg.valid) {
      this.createNotification('success', 'Проверка пройдена');
      fg.reset();
    } else {
      fg.markAllAsTouched();
      this.createNotification('error', 'Ой, что-то пошло не так');
    }
  }

  createNotification(type: 'success' | 'error', message): void {
    this.notification.create(type, type, message);
  }

  closeModal(): void {
    this.isModalVisible = false;
    this.fg1.reset();
    this.fg2.reset();
  }
}
