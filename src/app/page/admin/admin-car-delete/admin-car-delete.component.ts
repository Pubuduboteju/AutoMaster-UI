import { Component, OnInit } from '@angular/core';
import {Car} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminCarDeleteService} from "./admin-car-delete.service";
import {ToastrService} from "ngx-toastr";
import {ConfirmationDialogService} from "../../confirmation-dialog/confirmation-dialog.service";

@Component({
  selector: 'app-admin-car-delete',
  templateUrl: './admin-car-delete.component.html',
  styleUrls: ['./admin-car-delete.component.css']
})
export class AdminCarDeleteComponent implements OnInit {

  private adminCars: Car[] = [];

  constructor(private adminCarDeleteService: AdminCarDeleteService, private router: Router, private route: ActivatedRoute,  private confirmationDialogService: ConfirmationDialogService,  private toastr: ToastrService,) { }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {

    this.adminCarDeleteService.getAllCar()
      .subscribe(
        res => {
          this.adminCars = res;
          console.log(this.adminCars);
        }, error => {
          console.log(error);
        }
      );
  }

  successmsg(){
    this.toastr.success("You have successfully deleted your vehicle!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle registration was not successful",'Error')

  }

  deleteSelectedAdminCar(id: string){
    this.confirmationDialogService.confirm('Please confirm your deletion', 'Do you really want to delete this vehicle?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
      .then((confirmed) => { if(confirmed){
        this.adminCarDeleteService.deleteAdminCar(id)
          .subscribe(
            res => {
              // this.userCars = res;
              console.log(res);
              if(res.statusDescription == 'Success'){
                this.successmsg();
              }else{
                this.errorsmsg();
              }
              // window.location.reload();
              ///////////////////////
              this.adminCarDeleteService.getAllCar()
                .subscribe(
                  res => {
                    this.adminCars = res;
                    console.log(this.adminCars);
                  }, error => {
                    console.log(error);
                  }
                );
              //////////////////////
            }, error => {
              console.log(error);
            }
          );
      }})
      // .then( ((confirmed) => this.isDelete = confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

}
