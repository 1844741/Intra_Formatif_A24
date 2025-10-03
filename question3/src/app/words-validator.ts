import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minMots(min: number): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        const comments = control.value;
        
        if (!comments) return null;

        console.log(comments.split(" ").length);
        const estValide = comments.split(" ").length >= min;
        return estValide ? null : { minMots: true };
    }
}