import { Component }        from '@angular/core';
import { AbstractReactive } from '../abstract-reactive';

@Component({
  selector: 'app-reactive-checkbox',
  templateUrl: './reactive-checkbox.component.html',
  styles: [`:host { display: block }`]
})
export class ReactiveCheckboxComponent extends AbstractReactive {
}
