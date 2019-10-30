import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../../models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserCarRegisterService} from "./user-car-register.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../auth/token-storage.service";

@Component({
  selector: 'app-user-car-register',
  templateUrl: './user-car-register.component.html',
  styleUrls: ['./user-car-register.component.css']
})
export class UserCarRegisterComponent implements OnInit {
  registerUserCarsForm: FormGroup;
  private userCars: UserCars[] = [];
  private file: File;
  info:any

  constructor(private userCarRegisterService: UserCarRegisterService, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router,private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.registerUserCarsForm = this.formBuilder.group(
      {
        'userName': [this.info.username, Validators.compose([Validators.required])],
        'vehicleModel': [null, Validators.compose([Validators.required])],
        'vehicleMake': [null, Validators.compose([Validators.required])],
        'modelYear': [null, Validators.compose([Validators.required])],
        'bodyType': [null, Validators.compose([Validators.required])],
        'engineCapacity': [null, Validators.compose([Validators.required])],
        'transmission': [null, Validators.compose([Validators.required])],
        'fuelType': [null, Validators.compose([Validators.required])],
        'chassisNumber': [null, Validators.compose([Validators.required])],
        'vehicleNumber': [null, Validators.compose([Validators.required])],
        'registeredYear': [null, Validators.compose([Validators.required])],
        'currentMileage': [null, Validators.compose([Validators.required])],
        'lastEngineOilChange': [null, Validators.compose([Validators.required])],
        'lastEngineOilFilterChange': [null, Validators.compose([Validators.required])],
        'lastGearOilChange': [null, Validators.compose([Validators.required])],
        'file': [null, Validators.compose([Validators.required])],
      });
  }

  successmsg(){
    this.toastr.success("You have successfully registered a vehicles!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle registration was not successful",'Error')

  }
  infotoastr(){
    this.toastr.info("Important News", 'Information');
  }
  toastrwaring(){
    this.toastr.warning("Battery about to Die", 'Warning');
  }


  onRegisterNewUserCar(value: any) {
    value.file = this.file;
    console.log(value);
    this.userCarRegisterService.registerUserCars(value, this.file)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          this.router.navigateByUrl('user-profile/user-car-card');
        }, error => {
          console.log(error);
        }
      );
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    const file: File = fileList[0];
    this.file = file;
    console.log(file);
  }

}
