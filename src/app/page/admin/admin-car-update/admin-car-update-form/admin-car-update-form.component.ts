import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../../../models";
import {AdminCarUpdateFormService} from "./admin-car-update-form.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminCarViewDetailsService} from "../../admin-car-view/admin-car-view-details/admin-car-view-details.service";

@Component({
  selector: 'app-admin-car-update-form',
  templateUrl: './admin-car-update-form.component.html',
  styleUrls: ['./admin-car-update-form.component.css']
})
export class AdminCarUpdateFormComponent implements OnInit {
  adminCarUpdateForm: FormGroup;
  adminCar: Car;
  adminCarId: string;
  private file:File;

  constructor( private adminCarUpdateFormService: AdminCarUpdateFormService, private adminCarViewDetailsService: AdminCarViewDetailsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.adminCarId = this.route.snapshot.queryParamMap.get("id");
    this.route.queryParamMap.subscribe(queryParams => {
      this.adminCarId = queryParams.get("id");
      this.adminCarViewDetailsService.getAdminCar(this.adminCarId)
        .subscribe(res => {
          this.adminCar = res;
          console.log(this.adminCar);
          this.adminCarUpdateForm = this.formBuilder.group(
            {
              'id': [this.adminCar.id, Validators.compose([Validators.required])],
              'vehicleModel': [this.adminCar.vehicleModel, Validators.compose([Validators.required])],
              'vehicleMake': [this.adminCar.vehicleMake, Validators.compose([Validators.required])],
              'trim_edition': [this.adminCar.trim_edition, Validators.compose([Validators.required])],
              'modelYear': [this.adminCar.modelYear, Validators.compose([Validators.required])],
              'bodyType': [this.adminCar.bodyType, Validators.compose([Validators.required])],
              'engineCapacity': [this.adminCar.engineCapacity, Validators.compose([Validators.required])],
              'transmission': [this.adminCar.transmission, Validators.compose([Validators.required])],
              'fuelType': [this.adminCar.fuelType, Validators.compose([Validators.required])],
              'image': [this.adminCar.image, Validators.compose([Validators.required])],
            });
        });
    });


  }

  successmsg(){
    this.toastr.success("You have successfully updated vehicle details!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle updation was not successful",'Error')

  }

  onUpdateAdminCar(value: any){
    // value.file = this.file;
    console.log(value);
    this.adminCarUpdateFormService.updateAdminCar(value)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          this.router.navigateByUrl('admin/admin-car-update');
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
