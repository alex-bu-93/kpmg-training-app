import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractReactive }             from '../abstract-reactive';

@Component({
  selector: 'app-reactive-input-phone',
  templateUrl: './reactive-input-phone.component.html'
})
export class ReactiveInputPhoneComponent extends AbstractReactive implements OnInit {

  @ViewChild('input') input;

  value: string;

  get inputValue(): string { return this.input.nativeElement.value; }

  ngOnInit(): void {
    this.control.value?.toString().split('').forEach((x, i) => setTimeout(() => this.value = this.inputValue + x, i));
  }

  modelChange(str: string): void {
    this.value = str;
    setTimeout(() => this.control.patchValue(this.inputValue?.replace(/\D/g, '')));
  }
}
