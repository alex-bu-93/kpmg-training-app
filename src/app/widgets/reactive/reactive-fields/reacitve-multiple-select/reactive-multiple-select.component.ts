import { Component, Input }        from '@angular/core';
import { NzSelectOptionInterface } from 'ng-zorro-antd/select';
import { AbstractReactive }        from '../abstract-reactive';

@Component({
  selector: 'app-reactive-multiple-select',
  templateUrl: './reactive-multiple-select.component.html'
})
export class ReactiveMultipleSelectComponent extends AbstractReactive {

  @Input() options: NzSelectOptionInterface[];

  onModelChange(e): void {
    if (e?.length) return;
    this.control.patchValue(null);
    this.valueChange.emit(this.control.value);
  }
}
