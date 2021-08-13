import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

enum ErrorMessage {
  required = 'Необходимо заполнить',
  notConfirm = 'Пароли не совпадают'
}

@Component({
  selector: 'app-validation-message',
  template: `
    <div style="min-height: 25px" class="my-1">
      <span *ngIf="condition && message" class="text-danger">{{message}}</span>
    </div>
  `
})
export class ValidationMessageComponent implements OnChanges {
  @Input() errors: any;
  @Input() condition: boolean;

  message: string;

  ngOnChanges({errors}: SimpleChanges): void {
    const err = errors?.currentValue;
    if (err) {
      this.message = '';
      Object.keys(err).forEach(key => err[key] && (this.message = this.message + `${ErrorMessage[key]}; `));
    }
  }
}
