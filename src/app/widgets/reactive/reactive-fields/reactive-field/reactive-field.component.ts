import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReactiveField }                             from './reactive-field.interface';
import { FormControl }                               from '@angular/forms';

@Component({
  selector: 'app-reactive-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reactive-field.component.html'
})
export class ReactiveFieldComponent {

  @Input() field: ReactiveField;

  emptyControl = new FormControl();

}
