import { AbstractControl, ValidatorFn } from '@angular/forms';

  export function validatorCode(): ValidatorFn {
    
    return (control: AbstractControl): {[key: string]: boolean} | null =>{
      if(control.value.toLowerCase()=="code45" || control.value.toLowerCase()=="code54"){
        return null;
      }
      else if(control.value.toLowerCase()==''){
          return  null;
      }
      return  {'codeInavlid':true};
    };
  }