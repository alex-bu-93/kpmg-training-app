import { Directive, HostListener } from '@angular/core';
import includes                    from 'lodash/includes';

@Directive({selector: '[numbersOnly]'})
export class NumbersOnlyDirective {

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent): boolean {
    const isNumberPressed = (event.key >= '0' && event.key <= '9');
    const isPermitted = event.ctrlKey || includes(['Tab', 'Backspace', 'ArrowRight', 'ArrowLeft'], event.key);
    return isPermitted || isNumberPressed;
  }

}
