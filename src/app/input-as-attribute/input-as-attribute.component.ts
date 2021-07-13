import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-as-attribute',
  template: `isReadonly: {{isReadonly}}`,
  styleUrls: ['./input-as-attribute.component.css']
})
export class InputAsAttributeComponent {

  private _isReadonly = false;
  @Input() set isReadonly(value: boolean) { this._isReadonly = typeof value === 'boolean' ? value : true; }
  get isReadonly(): boolean { return this._isReadonly; }

}
