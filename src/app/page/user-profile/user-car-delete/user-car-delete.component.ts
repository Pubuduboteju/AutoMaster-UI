import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../../models";
import {UserCarDeleteService} from "./user-car-delete.service";
import {ConfirmationDialogService} from "../../confirmation-dialog/confirmation-dialog.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-car-delete',
  templateUrl: './user-car-delete.component.html',
  styleUrls: ['./user-car-delete.component.css']
})
export class UserCarDeleteComponent implements OnInit {

  private userCars: UserCars[] = [];
  private isDelete:boolean;

  constructor(private userCarDeleteService: UserCarDeleteService, private confirmationDialogService: ConfirmationDialogService,  private toastr: ToastrService,  private router: Router) { }

  ngOnInit() {
    this.getAllUserCars();
  }

  getAllUserCars() {

    this.userCarDeleteService.getAllUserCars()
      .subscribe(
        res => {
          this.userCars = res;
          console.log(this.userCars);
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

  deleteSelectedUserCar(id: string){
    this.confirmationDialogService.confirm('Please confirm your deletion', 'Do you really want to delete this vehicle?')
      // .then((confirmed) => console.log('User confirmed:', confirmed))
      .then((confirmed) => { if(confirmed){
        this.userCarDeleteService.deleteUserCar(id)
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
              /////////////////////////
              this.userCarDeleteService.getAllUserCars()
                .subscribe(
                  res => {
                    this.userCars = res;
                    console.log(this.userCars);
                  }, error => {
                    console.log(error);
                  }
                );
              ////////////////////////
            }, error => {
              console.log(error);
            }
          );
      }})
      // .then( ((confirmed) => this.isDelete = confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    // if(this.isDelete){
    //   this.userCarDeleteService.deleteUserCar(id)
    //     .subscribe(
    //       res => {
    //         // this.userCars = res;
    //         console.log(res);
    //       }, error => {
    //         console.log(error);
    //       }
    //     );
    // }


  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => console.log('User confirmed:', confirmed))
      // .then( ((confirmed) => this.isDelete = confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
