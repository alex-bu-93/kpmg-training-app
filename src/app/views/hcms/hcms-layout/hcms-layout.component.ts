import { Component }           from '@angular/core';
import { DictionariesService } from '../services/dictionaries';

@Component({
  selector: 'app-hcms-layout',
  templateUrl: './hcms-layout.component.html'
})
export class HcmsLayoutComponent {

  dictionaries$ = this.dictionariesService.getDictionaries$();

  constructor(
    private dictionariesService: DictionariesService
  ) {
  }
}
