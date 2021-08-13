import { AfterContentInit, Component, Input } from '@angular/core';
import { AbstractReactive }                   from '../abstract-reactive';

@Component({
  selector: 'app-reactive-text-area',
  templateUrl: './reactive-text-area.component.html'
})
export class ReactiveTextAreaComponent extends AbstractReactive {

  @Input() minRows: number;
  @Input() maxRows: number;

}
