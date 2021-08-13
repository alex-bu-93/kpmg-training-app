import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors }                          from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<span *ngIf="validationErrors | reactiveValidationMessage as message" class="form-help-text"> {{message}} </span>',
  styles: [`
    .form-help-text {
      color: red;
      position: absolute;
      bottom: -20px;
      width: 100%;
      font-size: 0.8em;
      line-height: 20px;
    }
  `]
})
export class ReactiveValidationMessageComponent {

  /**
   * validationErrors is a reactive form errors
   * it's nonnull in case if the control is touched and invalid,
   * which is defined on the reactive base component side
   */
  @Input() validationErrors: ValidationErrors;

}
