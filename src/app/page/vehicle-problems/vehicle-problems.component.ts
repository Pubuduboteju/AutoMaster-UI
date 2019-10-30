import { Component, OnInit } from '@angular/core';
import {Car} from '../../models';
import {VehicleProblemsService} from "./vehicle-problems.service";
// import {forEach} from "@angular/router/src/utils/collection";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserComments} from "../../models";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../auth/token-storage.service";
import {StarRatingComponent} from "ng-starrating";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-vehicle-problems',
  templateUrl: './vehicle-problems.component.html',
  styleUrls: ['./vehicle-problems.component.css']
})
export class VehicleProblemsComponent implements OnInit {
  newUserCommentForm: FormGroup;
  public cars: Car[] = [];
  public car: Car;
  private carNames: String[] = [];
  private userComments: UserComments[] = [];
  private vehicleModel: String;
  public showUserComments: UserComments[] = [];
  public selectedVehicleModel : String;
  public userName:string;
  private vehicleRate:number;


  constructor(private vehicleProblemsService: VehicleProblemsService, private formBuilder: FormBuilder, private toastr: ToastrService,  private tokenStorage: TokenStorageService) {

  }

  ngOnInit() {
    this.getAllCars();

    this.getAllUserComments();

    this.userName = this.tokenStorage.getUsername();
    // this.newUserCommentForm = this.formBuilder.group(
    //   {
    //     'userName': [null, Validators.compose([Validators.required])],
    //     'vehicleName': [null, Validators.compose([Validators.required])],
    //     'comment': [null, Validators.compose([Validators.required])],
    //   });
  }

  successmsg(){
    this.toastr.success("Your comment successfully added!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your comment was not added",'Error')

  }
  infotoastr(){
    this.toastr.info("Important News", 'Information');
  }
  toastrwaring(){
    this.toastr.warning("Battery about to Die", 'Warning');
  }


  getAllCars() {

    this.vehicleProblemsService.getAllCar()
      .subscribe(
        res => {
          this.cars = res;
          console.log(this.cars);
        }, error => {
          console.log(error);
        }
      );
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

  carOnChange($event: any) {
    this.getCarById($event);
  }

  getCarById(id: string) {
    this.vehicleProblemsService.getCar(id)
      .subscribe(res => {
        this.car=res;
        var vehicleModel:string;
        vehicleModel = res.vehicleModel;
        // this.newUserCommentForm.setValue({vehicleName: res.vehicleModel});
        this.selectedVehicleModel = res.vehicleModel;
        var i:number = 0;
        let showUserCom = []
        this.userComments.forEach(function (data) {
          if(data.vehicleName== vehicleModel){
            showUserCom[i] = data;
            if(showUserCom[i].commentDate!= null){
              var datePipeCommentDate = new DatePipe('en-US');
              var commentDateFormatted = datePipeCommentDate.transform(showUserCom[i].commentDate,"EEEE, MMMM d, y, h:mm:ss a zzzz");
              showUserCom[i].commentDateString = commentDateFormatted;
            }

            i++;
          }

        })
        //------------
        this.newUserCommentForm = this.formBuilder.group(
          {
            'userName': [this.userName, Validators.compose([Validators.required])],
            'vehicleName': [ this.selectedVehicleModel, Validators.compose([Validators.required])],
            'comment': [null, Validators.compose([Validators.required])],
          });
        //--------------
        this.showUserComments = showUserCom;
        this.showUserComments.reverse();
        console.log(res);
      })

  }

  onCreateNewComment(value: any) {
    var currentDate = new Date();
    value.vehicleRate = this.vehicleRate;
    value.commentDate = currentDate;
    // value.file = this.file;
    console.log(value);
    // this.registerService.create(value, this.file)
    this.vehicleProblemsService.create(value)
      .subscribe(
        res => {
          //--------------------------------------
          this.vehicleProblemsService.getAllUserComments()
            .subscribe(
              res1 => {
                this.userComments = res1;
                var i:number = 0;
                let showUserCom = []
                this.userComments.forEach(function (data) {
                  if(data.vehicleName==  res.content.vehicleName){
                    showUserCom[i] = data;
                    // this.commentDateFormatted = this.datePipeCommentDate.transform(showUserCom[i].commentDate,"EEEE, MMMM d, y, h:mm:ss a zzzz");
                    // showUserCom[i].commentDateString = this.commentDateFormatted;
                    var datePipeCommentDate = new DatePipe('en-US');
                    var commentDateFormatted = datePipeCommentDate.transform(showUserCom[i].commentDate,"EEEE, MMMM d, y, h:mm:ss a zzzz");
                    showUserCom[i].commentDateString = commentDateFormatted;
                    i++;
                  }

                })
                this.newUserCommentForm = this.formBuilder.group(
                  {
                    'userName': [this.userName, Validators.compose([Validators.required])],
                    'vehicleName': [ this.selectedVehicleModel, Validators.compose([Validators.required])],
                    'comment': [null, Validators.compose([Validators.required])],
                  });
                this.showUserComments = showUserCom;
                this.showUserComments.reverse();
                console.log(this.userComments);
              }, error => {
                console.log(error);
              }
            );
          //--------------------------------------
          console.log(res);
          if(res.statusDescription){
            this.successmsg();
          }else{
            this.errorsmsg();
          }

        }, error => {
          console.log(error);
        }
      );
    //--------------------------------------
    this.vehicleProblemsService.getAllUserComments()
      .subscribe(
        res => {
          this.userComments = res;
          console.log(this.userComments);
        }, error => {
          console.log(error);
        }
      );
    //--------------------------------------
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.vehicleRate = $event.newValue;
    // alert(`Old Value:${$event.oldValue},
    //   New Value: ${$event.newValue},
    //   Checked Color: ${$event.starRating.checkedcolor},
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
