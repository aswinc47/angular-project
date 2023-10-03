import { FormControl } from "@angular/forms";

export interface ILoginFormGroup{
    userId : FormControl<string>,
    password : FormControl<string>
}
