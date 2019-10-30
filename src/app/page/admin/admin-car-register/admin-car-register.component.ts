import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../models";
import {AdminCarRegisterService} from "./admin-car-register.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-car-register',
  templateUrl: './admin-car-register.component.html',
  styleUrls: ['./admin-car-register.component.css']
})
export class AdminCarRegisterComponent implements OnInit {
  createAdminCarForm: FormGroup;
  private cars: Car[] = [];
  private file: File;


  constructor(private adminCarRegisterService: AdminCarRegisterService, private formBuilder: FormBuilder,  private toastr: ToastrService, private router: Router) { }

  ngOnInit() {

    this.createAdminCarForm = this.formBuilder.group(
      {
        'vehicleModel': [null, Validators.compose([Validators.required])],
        'vehicleMake': [null, Validators.compose([Validators.required])],
        'trim_edition': [null, Validators.compose([Validators.required])],
        'modelYear': [null, Validators.compose([Validators.required])],
        'bodyType': [null, Validators.compose([Validators.required])],
        'engineCapacity': [null, Validators.compose([Validators.required])],
        'transmission': [null, Validators.compose([Validators.required])],
        'fuelType': [null, Validators.compose([Validators.required])],
        'file': [null, Validators.compose([Validators.required])],
      });
  }

  successmsg(){
    this.toastr.success("Admin has successfully added a vehicle to the system!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Vehicle adding to the system unsuccessful!",'Error')

  }

  onRegisterNewAdminCar(value: any) {
    value.file = this.file;
    console.log(value);
    this.adminCarRegisterService.create(value, this.file)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          this.router.navigateByUrl('admin/admin-car-view');
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
