import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function appleMailValidator(): ValidatorFn {
  return (ctrl: AbstractControl): null | ValidationErrors => {
    if (! ctrl.value || ctrl.value.includes('me.com') || ctrl.value.includes('apple.com') || ctrl.value.includes('icloud.com')) {
      return null;
    } else {
      return {
        appleMailValidator: ctrl.value
      };
    }
  };
}
