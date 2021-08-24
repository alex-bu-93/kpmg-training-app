import { NgModule }             from '@angular/core';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  declarations: [NumbersOnlyDirective],
  exports: [NumbersOnlyDirective]
})
export class NumbersOnlyDirectiveModule {
}
