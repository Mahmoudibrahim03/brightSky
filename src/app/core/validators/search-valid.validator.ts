import {AbstractControl, FormGroup, ValidationErrors} from "@angular/forms";


export function formValidation(group: AbstractControl): ValidationErrors | null {
  const from = (group as FormGroup).controls['fromSearch'].value;
  const to = (group as FormGroup).controls['toSearch'].value;
  if (from === to) return {"sameValueErr": true}
  else {
    return {"sameValueErr": false}
  }
}
