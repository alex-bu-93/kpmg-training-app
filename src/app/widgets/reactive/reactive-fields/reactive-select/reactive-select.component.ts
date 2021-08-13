import { Component, Input, OnInit } from '@angular/core';
import { Observable }               from 'rxjs';
import { tap }                      from 'rxjs/operators';
import { NzSelectOptionInterface }  from 'ng-zorro-antd/select';
import { AbstractReactive }         from '../abstract-reactive';

@Component({
  selector: 'app-reactive-select',
  templateUrl: './reactive-select.component.html',
  styles: [`:host { display: block }`]
})
export class ReactiveSelectComponent extends AbstractReactive implements OnInit {

  @Input() options: NzSelectOptionInterface[];
  @Input() isLoading: boolean;

  controlValueChanges$: Observable<any>;

  ngOnInit(): void {
    this.controlValueChanges$ = this.control.valueChanges.pipe(
      tap(value => this.valueChange.emit(value))
    );
  }
}
