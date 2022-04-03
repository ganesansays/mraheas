import { ElementRef } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function accountNumberValidator(): ValidatorFn {

    let thisControl: AbstractControl;
    let otherControl: FormControl;

    return (control: AbstractControl): ValidationErrors | null => {
   
        if (!control.parent) {
            return null;
        }
    
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get("thirdCtrl") as FormControl;

            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }

            otherControl.valueChanges.subscribe(() => {
                thisControl.updateValueAndValidity();
            });
        }
    
        if (!otherControl) {
            return null;
        }
    
        if (otherControl.value != thisControl.value) {
            return {
                notEqualError: true
            };
        }
    
        return null;
      
    }
   
  }