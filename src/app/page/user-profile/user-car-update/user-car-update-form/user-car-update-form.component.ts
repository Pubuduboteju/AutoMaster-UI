import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../../../models";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserCarUpdateFormService} from "./user-car-update-form.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {UserCarDetailsService} from "../../user-car-card/user-car-details/user-car-details.service";

@Component({
  selector: 'app-user-car-update-form',
  templateUrl: './user-car-update-form.component.html',
  styleUrls: ['./user-car-update-form.component.css']
})
export class UserCarUpdateFormComponent implements OnInit {
  userCarUpdateForm: FormGroup;
  userCar: UserCars;
  userCarId: string;
  private file: File;

  constructor( private userCarUpdateFormService: UserCarUpdateFormService,private userCarDetailsService:UserCarDetailsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.userCarId = this.route.snapshot.queryParamMap.get("id");
    this.route.queryParamMap.subscribe(queryParams => {
      this.userCarId = queryParams.get("id");
      this.userCarDetailsService.getUserCar(this.userCarId)
        .subscribe(res => {
          this.userCar = res;
          console.log(this.userCar);
          this.userCarUpdateForm = this.formBuilder.group(
            {
              'id': [this.userCar.id, Validators.compose([Validators.required])],
              'userName': [this.userCar.userName, Validators.compose([Validators.required])],
              'vehicleModel': [this.userCar.vehicleModel, Validators.compose([Validators.required])],
              'vehicleMake': [this.userCar.vehicleMake, Validators.compose([Validators.required])],
              'modelYear': [this.userCar.modelYear, Validators.compose([Validators.required])],
              'bodyType': [this.userCar.bodyType, Validators.compose([Validators.required])],
              'engineCapacity': [this.userCar.engineCapacity, Validators.compose([Validators.required])],
              'transmission': [this.userCar.transmission, Validators.compose([Validators.required])],
              'fuelType': [this.userCar.fuelType, Validators.compose([Validators.required])],
              'chassisNumber': [this.userCar.chassisNumber, Validators.compose([Validators.required])],
              'vehicleNumber': [this.userCar.vehicleNumber, Validators.compose([Validators.required])],
              'registeredYear': [this.userCar.registeredYear, Validators.compose([Validators.required])],
              'currentMileage': [this.userCar.currentMileage, Validators.compose([Validators.required])],
              'lastEngineOilChange': [this.userCar.lastEngineOilChange, Validators.compose([Validators.required])],
              'lastEngineOilFilterChange': [this.userCar.lastEngineOilFilterChange, Validators.compose([Validators.required])],
              'lastGearOilChange': [this.userCar.lastGearOilChange, Validators.compose([Validators.required])],
              'image': [this.userCar.image, Validators.compose([Validators.required])],
            });
        });
    });

  }

  successmsg(){
    this.toastr.success("You have successfully registered a vehicles!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle registration was not successful",'Error')

  }

  onUpdateUserCar(value: any){
    // value.file = this.file;
    console.log(value);
    this.userCarUpdateFormService.updateUserCar(value)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          // this.router.navigateByUrl('user-profile/user-car-card');
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
