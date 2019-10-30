import { Component, OnInit } from '@angular/core';

import { AuthService} from "../auth/auth.service";
import {TokenStorageService} from "../auth/token-storage.service";
import {AuthLoginInfo} from "../auth/login-info";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private toastr: ToastrService,  private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      if(this.isLoggedIn && this.roles[0] == "ROLE_USER"){
        this.successmsg();
        this.router.navigateByUrl('/user-profile');
      }else if(this.isLoggedIn && this.roles[0] == "ROLE_ADMIN"){
        this.successmsgAdminProfile();
        this.router.navigateByUrl('/admin');
      }
    }
  }

  successmsg(){
    this.toastr.success("You have successfully logged into your profile!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Username or Password incorrect, please give correct credentials",'Error !!!')

  }
  successmsgAdminProfile(){
    this.toastr.success("You have successfully logged into the system as an admin!",'Successful !!!')
  }
  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();

        this.reloadPage();
        // this.successmsg();
        // this.router.navigateByUrl('/user-profile');
      },
      error => {
        console.log(error);
        this.errorsmsg();
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
