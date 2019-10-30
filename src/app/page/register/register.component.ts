import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "../../models";
import {RegisterService} from "./register.service";

import {AuthService} from "../auth/auth.service";
import {SignUpInfo} from "../auth/signup-info";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserForm: FormGroup;
  private user: User[] = [];

  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder,private authService: AuthService) { }

  ngOnInit() {

    // this.registerUserForm = this.formBuilder.group(
    //   {
    //     'userName': [null, Validators.compose([Validators.required])],
    //     'firstName': [null, Validators.compose([Validators.required])],
    //     'lastName': [null, Validators.compose([Validators.required])],
    //     'phoneNo': [null, Validators.compose([Validators.required])],
    //     'email': [null, Validators.compose([Validators.required])],
    //     'password': [null, Validators.compose([Validators.required])],
    //   });
  }

  onSubmit() {
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password);

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onCreateNewUser(value: any) {
    // value.file = this.file;
    console.log(value);
    // this.registerService.create(value, this.file)
    this.registerService.create(value)
      .subscribe(
        res => {
          console.log(res);
        }, error => {
          console.log(error);
        }
      );
  }

}
