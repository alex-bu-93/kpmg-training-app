import { AfterContentInit, EventEmitter, Injectable, Output, TemplateRef, Directive } from '@angular/core';
import { Input, DoCheck }                                                             from '@angular/core';
import { AbstractControl, ValidationErrors }                                          from '@angular/forms';
import { hasRequiredValidator }                                                       from '../reactive-funcs';

@Directive()
@Injectable()
export abstract class AbstractReactive implements AfterContentInit, DoCheck {

  @Input() fieldId: string | null = null;
  @Input() control: AbstractControl | null = null;
  @Input() label: string | null = null;
  @Input() subLabel: string | null = null;
  @Input() tooltip: string | TemplateRef<void>;
  @Input() prefixTmp: string | TemplateRef<void>;
  @Input() hasRequiredIndicator: boolean;
  @Input() placeholder: string | null = null;

  private _noMarginBottom = false;
  @Input() set noMarginBottom(prop: boolean) { this._noMarginBottom = typeof prop === 'boolean' ? prop : true; }
  get noMarginBottom(): boolean { return this._noMarginBottom; }

  private _noValidationMark = false;
  @Input() set noValidationMark(prop: boolean) { this._noValidationMark = typeof prop === 'boolean' ? prop : true; }
  get noValidationMark(): boolean { return this._noValidationMark; }

  private _noValidationMessage = false;
  @Input() set noValidationMessage(prop: boolean) { this._noValidationMessage = typeof prop === 'boolean' ? prop : true; }
  get noValidationMessage(): boolean { return this._noValidationMessage; }

  @Output() valueChange = new EventEmitter();

  validationErrors: ValidationErrors;

  ngAfterContentInit(): void {
    this.hasRequiredIndicator = this.hasRequiredIndicator === false ? false : hasRequiredValidator(this.control);
  }

  ngDoCheck(): void {
    if (this.control) this.validationErrors = this.control.touched && this.control.invalid ? this.control.errors : null;
  }
}
