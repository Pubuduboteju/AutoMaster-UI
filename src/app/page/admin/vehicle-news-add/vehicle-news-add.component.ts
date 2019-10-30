import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VehicleNews} from "../../../models";
import {VehicleNewsAddService} from "./vehicle-news-add.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-vehicle-news-add',
  templateUrl: './vehicle-news-add.component.html',
  styleUrls: ['./vehicle-news-add.component.css']
})
export class VehicleNewsAddComponent implements OnInit {
  createVehicleNewsForm: FormGroup;
  private vehicleNews: VehicleNews[] = [];
  private file: File;

  constructor(private vehicleNewsAddService: VehicleNewsAddService,  private formBuilder: FormBuilder,  private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.createVehicleNewsForm = this.formBuilder.group(
      {
        'title': [null, Validators.compose([Validators.required])],
        'subTitle': [null, Validators.compose([Validators.required])],
        'description': [null, Validators.compose([Validators.required])],
        'newsDate': [null, Validators.compose([Validators.required])],
        'file': [null, Validators.compose([Validators.required])],
      });
  }

  successmsg(){
    this.toastr.success("Admin has successfully added a vehicle to the system!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Vehicle adding to the system unsuccessful!",'Error')

  }

  onCreateNewsVehicleNews(value: any) {
    value.file = this.file;
    console.log(value);
    this.vehicleNewsAddService.create(value, this.file)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          this.router.navigateByUrl('admin/vehicle-news-view-delete');
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
