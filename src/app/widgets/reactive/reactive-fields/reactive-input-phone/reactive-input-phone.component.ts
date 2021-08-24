import { Component, Input, ViewChild } from '@angular/core';
import { AbstractReactive }            from '../abstract-reactive';

@Component({
  selector: 'app-reactive-input-phone',
  templateUrl: './reactive-input-phone.component.html'
})
export class ReactiveInputPhoneComponent extends AbstractReactive {

  @ViewChild('input') input;

  value: string;

  modelChange(str: string): void {
    this.value = str;
    setTimeout(() => this.control.patchValue(this.input.nativeElement.value?.replace(/\D/g, '')), 10);
  }
}
