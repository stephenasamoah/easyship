import { FormGroup } from '@angular/forms';

export class UserValidators {
  matchPassword(control: string, matchControl: string) {
    return (form: FormGroup) => {
      const initial = form.controls[control];
      const matchInitial = form.controls[matchControl];

      if (matchInitial.errors && !matchInitial.errors.mustMatch) {
        return;
      }

      // set error on matchingControl if validation fails
      if (initial.value !== matchInitial.value) {
        matchInitial.setErrors({ mustMatch: true });
      } else {
        matchInitial.setErrors(null);
      }
    };
  }
}
