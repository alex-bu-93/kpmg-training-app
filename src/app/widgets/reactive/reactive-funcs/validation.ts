import { AbstractControl, FormGroup } from '@angular/forms';

/** Method return boolean value depends on input control requirement */
export function hasRequiredValidator(abstractControl: AbstractControl): boolean {
  const validator = abstractControl?.validator ? abstractControl.validator({} as AbstractControl) : null;
  return validator?.required;
}

/** Method return vertical coordinates of the input document element */
function getVerticalCoordinate(el): number {
  let y = 0;
  const fieldHeight = 50;
  while (el && !isNaN(el.offsetTop)) {
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return y > fieldHeight ? y - fieldHeight : y;
}

/**
 * Method validates if all control of the input form group are valid
 * If not, it marks them touched to trigger required validation procedures
 */
export function markTouchedAndScroll(formGroup: FormGroup): void {
  formGroup.markAllAsTouched();
  Object.keys(formGroup.controls).every(key => {
    if (formGroup.get(key).status === 'INVALID') {
      const el = document.getElementById(key);
      if (el) { el.focus(); window.scrollTo({top: getVerticalCoordinate(el), behavior: 'smooth'}); }
      return false;
    }
    return true;
  });
}
