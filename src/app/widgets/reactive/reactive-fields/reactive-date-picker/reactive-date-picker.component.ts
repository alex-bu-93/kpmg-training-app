import { Component, Input } from '@angular/core';
import { AbstractReactive } from '../abstract-reactive';

@Component({
  selector: 'app-reactive-date-picker',
  templateUrl: './reactive-date-picker.component.html'
})
export class ReactiveDatePickerComponent extends AbstractReactive {

  @Input() format = 'dd.MM.yyyy';
  @Input() disabledDatesFn: (d: Date) => boolean;

}
