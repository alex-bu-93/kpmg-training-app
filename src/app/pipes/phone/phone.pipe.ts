import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phone'})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return null;

    const valueOnlyNumbers = +value.replace(/\D/g, '');
    const lastNumber = valueOnlyNumbers ? +valueOnlyNumbers.toString().substr(-1) : null;
    const lastSymbol = value ? value.substr(-1) : null;

    if (value === '+' || value === '+7') return null;

    switch (valueOnlyNumbers.toString().length) {
      case 1: return lastNumber === 4 || lastNumber === 9 ? '+7 (' + lastNumber : lastSymbol === ' ' ? '' : '+7 (';
      case 2: return lastNumber === 4 || lastNumber === 9 ? '+7 (' + lastNumber : '+7 (9';
      case 3: return value;
      case 4: return (lastSymbol !== ')' && lastSymbol !== ' ') ? value + ') ' : value.substr(0, 6);
      case 5: return value;
      case 6: return value;
      case 7: return lastSymbol !== '-' ? value + '-' : value;
      case 8: return value;
      case 9: return lastSymbol !== '-' ? value + '-' : value;
      case 10: return value;
      case 11: return value;
    }
  }
}
