import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { AbstractReactive }                                    from '../abstract-reactive';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html'
})
export class ReactiveInputComponent extends AbstractReactive {

  @Input() maxLength: number | null;
  @Input() inputType = 'text';

}
