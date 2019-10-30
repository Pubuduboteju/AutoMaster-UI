import { Component, OnInit } from '@angular/core';
import {Car, UserComments} from "../../../models";
import {VehicleDetailsService} from "../../vehicle-details/vehicle-details.service";
import {VehicleProblemsService} from "../../vehicle-problems/vehicle-problems.service";
import {DatePipe} from "@angular/common";
import {ToastrService} from "ngx-toastr";
import {ConfirmationDialogService} from "../../confirmation-dialog/confirmation-dialog.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AdminUserCommentsService} from "./admin-user-comments.service";

@Component({
  selector: 'app-admin-user-comments',
  templateUrl: './admin-user-comments.component.html',
  styleUrls: ['./admin-user-comments.component.css']
})
export class AdminUserCommentsComponent implements OnInit {
  public cars: Car[] = [];
  public car: Car;
  private userComments: UserComments[] = [];
  public adminUserComments: UserComments[] = [];
  public selectedVehicleModel : String;

  constructor(private adminUserCommentsService:AdminUserCommentsService, private vehicleDetailsService: VehicleDetailsService, private vehicleProblemsService: VehicleProblemsService,  private router: Router, private route: ActivatedRoute,  private confirmationDialogService: ConfirmationDialogService,  private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllCars();
    this.getAllUserComments();
  }

  successmsg(){
    this.toastr.success("You have successfully deleted your selected user comment!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your user comments deletion was unsuccessful",'Error')

  }

  getAllCars() {

    this.vehicleDetailsService.getAllCar()
      .subscribe(
        res => {
          this.cars = res;
          console.log(this.cars);
        }, error => {
          console.log(error);
        }
      );
  }

  carOnChange($event: any) {
    this.selectedVehicleModel = $event;
    // this.getCarById($event);
    var selectedVehicleModel = $event;
    var i:number = 0;
    let showUserCom = [];
    this.userComments.forEach(function (data) {
      if(data.vehicleName == selectedVehicleModel){
        showUserCom[i] = data;
        if(showUserCom[i].commentDate!= null){
          var datePipeCommentDate = new DatePipe('en-US');
          var commentDateFormatted = datePipeCommentDate.transform(showUserCom[i].commentDate,"EEE, MMM d, y, h:mm:ss a");
          showUserCom[i].commentDateString = commentDateFormatted;
        }

        i++;
      }

    })
    this.adminUserComments = showUserCom;
    console.log(showUserCom);
  }

  getCarById(id: string) {
    this.vehicleDetailsService.getCar(id)
      .subscribe(res => {
        this.car=res;
        console.log(res);
      })

  }

  getAllUserComments() {

    this.vehicleProblemsService.getAllUserComments()
      .subscribe(
        res => {
          this.userComments = res;
          console.log(this.userComments);
        }, error => {
          console.log(error);
        }
      );
  }

  deleteSelectedAdminUserComments(id: string){
    this.confirmationDialogService.confirm('Please confirm your deletion', 'Do you really want to delete this user comment?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
      .then((confirmed) => { if(confirmed){
        this.adminUserCommentsService.deleteAdminUserComments(id)
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
              // this.getAllUserComments();
              // this.carOnChange(this.selectedVehicleModel);
              ////////////////////////////
              this.vehicleProblemsService.getAllUserComments()
                .subscribe(
                  res1 => {
                    this.userComments = res1;
                    console.log(this.userComments);
                    /////////
                    var selectedVehicleModel = this.selectedVehicleModel;
                    var i:number = 0;
                    let showUserCom = [];
                    this.userComments.forEach(function (data) {
                      if(data.vehicleName == selectedVehicleModel){
                        showUserCom[i] = data;
                        if(showUserCom[i].commentDate!= null){
                          var datePipeCommentDate = new DatePipe('en-US');
                          var commentDateFormatted = datePipeCommentDate.transform(showUserCom[i].commentDate,"EEE, MMM d, y, h:mm:ss a");
                          showUserCom[i].commentDateString = commentDateFormatted;
                        }

                        i++;
                      }

                    })
                    this.adminUserComments = showUserCom;
                    console.log(showUserCom);
                    ////////
                  }, error => {
                    console.log(error);
                  }
                );
              ////////////////////////////
            }, error => {
              console.log(error);
            }
          );
      }})
      // .then( ((confirmed) => this.isDelete = confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }


}
