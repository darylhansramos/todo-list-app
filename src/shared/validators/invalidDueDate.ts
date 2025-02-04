import { AbstractControl } from "@angular/forms";

export function createInvalidDueDateValidator(datesForm : AbstractControl){
    let chosenDate = new Date(datesForm.value).setHours(0, 0, 0, 0);
    let today = new Date().setHours(0, 0, 0, 0);
    if (chosenDate < today){
        return { pastDueDate : true };
    }
    return null
} 
