import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserProfileService} from "./user-profile.service";
import {ActivatedRoute, Router} from "@angular/router";

import {TokenStorageService} from "../auth/token-storage.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  registerUserCarsForm: FormGroup;
  private userCars: UserCars[] = [];
  private file: File;
  public addNewUserVehicle:boolean = false;
  public viewMyVehicle:boolean = false;

  info: any;

  constructor(private userProfileService: UserProfileService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private token: TokenStorageService) {

  }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.getAllUserCars();

    this.registerUserCarsForm = this.formBuilder.group(
      {
        'userName': [null, Validators.compose([Validators.required])],
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

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  getAllUserCars() {

    this.userProfileService.getAllUserCars()
      .subscribe(
        res => {
          this.userCars = res;
          console.log(this.userCars);
        }, error => {
          console.log(error);
        }
      );
  }

  onRegisterNewUserCar(value: any) {
    value.file = this.file;
    console.log(value);
    this.userProfileService.registerUserCars(value, this.file)
      .subscribe(
        res => {
          console.log(res);
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

  showAddNewVehicleView(){
    // this.addNewUserVehicle = true;
    // this.viewMyVehicle = false;
    this.router.navigate(['user-car-register'], {relativeTo: this.route});
  }

  onCreateViewMyVehicleView(){
    this.viewMyVehicle = true;
    this.addNewUserVehicle = false;
  }

  showMyVehicleView(){
    this.router.navigate(['user-car-card'], {relativeTo: this.route});
  }

  showVehicleMaintenanceView(){
    this.router.navigate(['user-car-maintenance'], {relativeTo: this.route});
  }

  showVehicleUpdateView(){
    this.router.navigate(['user-car-update'], {relativeTo: this.route});
  }

  showVehicleDeleteView(){
    this.router.navigate(['user-car-delete'], {relativeTo: this.route});
  }

}
