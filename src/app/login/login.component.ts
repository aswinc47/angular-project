import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginFormGroup } from '../models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder,private http:HttpClient,private router : Router) {}

  LoginFormGroup:FormGroup<ILoginFormGroup> = this.fb.group({
    userId : this.fb.nonNullable.control('',[Validators.required]),
    password: this.fb.nonNullable.control('',[Validators.required])
  })

  onLoginSubmit(){

  }
  get LoginControls(){
    return this.LoginFormGroup.controls
  }


}
