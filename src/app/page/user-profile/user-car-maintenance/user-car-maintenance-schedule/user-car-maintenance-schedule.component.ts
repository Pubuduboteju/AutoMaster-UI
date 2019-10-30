import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../../../models";
import {UserCarMaintenanceScheduleService} from "./user-car-maintenance-schedule.service";
import {ActivatedRoute} from "@angular/router";
import {UserCarDetailsService} from "../../user-car-card/user-car-details/user-car-details.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-car-maintenance-schedule',
  templateUrl: './user-car-maintenance-schedule.component.html',
  styleUrls: ['./user-car-maintenance-schedule.component.css']
})
export class UserCarMaintenanceScheduleComponent implements OnInit {
  maintenanceUserCarsForm: FormGroup;
  userCar: UserCars;
  userCarId: string;
  public previousService:number;
  public currentService:number;
  public upcomingService:number;
  public userCarMaintenanceScheduleSummaryView:boolean = false;
  public userCarMaintenanceScheduleFullView:boolean = false;
  public currentDay:number;
  public currentMonth:number;
  public currentYear:number;
  public kmsPerDay:number;
  public currentServiceInDays:number;
  public upcomingServiceInDays:number;
  public currentServiceDate = new Date();
  // public currentServiceDateFormatted = new DatePipe('en-US');
  public currentServiceDateFormatted:string;
  public datePipeCurrent = new DatePipe('en-US');
  public upcomingServiceDate = new Date();
  // public upcomingServiceDateFormatted = new DatePipe('en-US');
  public upcomingServiceDateFormatted:string;
  public datePipeUpcoming = new DatePipe('en-US');

  //////Start writing Variable declaration for full maintenance view////////
  public upcomingServiceDatesArray: string[] = [];
  public daysFor5000kms:number;
  public currentServiceDateForLoop = new Date();

  public upcomingServiceInKmsArray: number[] = [];
  //////End writing Variable declaration for full maintenance view////////


  constructor(private userCarMaintenanceScheduleService: UserCarMaintenanceScheduleService, private userCarDetailsService:UserCarDetailsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.userCarId = this.route.snapshot.queryParamMap.get("id");
    this.route.queryParamMap.subscribe(queryParams => {
      this.userCarId = queryParams.get("id");
      this.userCarDetailsService.getUserCar(this.userCarId)
        .subscribe(res => {
          this.userCar = res;
          console.log(this.userCar);
          this.maintenanceUserCarsForm = this.formBuilder.group(
            {
              // 'userName': [null, Validators.compose([Validators.required])],
              // 'vehicleModel': [null, Validators.compose([Validators.required])],
              // 'vehicleMake': [null, Validators.compose([Validators.required])],
              // 'modelYear': [null, Validators.compose([Validators.required])],
              // 'bodyType': [null, Validators.compose([Validators.required])],
              // 'engineCapacity': [null, Validators.compose([Validators.required])],
              // 'transmission': [null, Validators.compose([Validators.required])],
              // 'fuelType': [null, Validators.compose([Validators.required])],
              // 'chassisNumber': [null, Validators.compose([Validators.required])],
              // 'vehicleNumber': [null, Validators.compose([Validators.required])],
              // 'registeredYear': [null, Validators.compose([Validators.required])],
              'currentMileage': [this.userCar.currentMileage, Validators.compose([Validators.required])],
              'lastEngineOilChange': [this.userCar.lastEngineOilChange, Validators.compose([Validators.required])],
              'lastEngineOilFilterChange': [this.userCar.lastEngineOilFilterChange, Validators.compose([Validators.required])],
              'lastGearOilChange': [this.userCar.lastGearOilChange, Validators.compose([Validators.required])],
              'avgKmsMonth': [null, Validators.compose([Validators.required])],
            });
        });
    });
    // var dateObj = new Date();
    // this.currentMonth = dateObj.getUTCMonth() + 1; //months from 1-12
    // this.currentDay = dateObj.getUTCDate();
    // this.currentYear = dateObj.getUTCFullYear();

  }

  successmsg(){
    this.toastr.success("Based on your vehicle information, here is the recommended service schedule.",'Successfully Viewing Maintenance Schedule !!!')
  }

  getUserCarMaintenanceSchedule(value: any) {
    this.userCarMaintenanceScheduleSummaryView = true;
    this.successmsg();
    console.log(value);
    //Start Writing logic to get the vehicle maintenance schedule--------
    this.previousService = value.lastEngineOilChange;
    this.currentService = value.lastEngineOilChange + 5000;
    this.upcomingService = this.currentService + 5000;
    this.kmsPerDay = (value.avgKmsMonth/30);
    this.currentServiceInDays = ((this.currentService - value.currentMileage)/this.kmsPerDay);
    this.upcomingServiceInDays = ((this.upcomingService - value.currentMileage)/this.kmsPerDay);
    var dateObj = new Date();

    this.currentServiceDate.setDate(dateObj.getDate() + this.currentServiceInDays);
    this.currentServiceDateFormatted = this.datePipeCurrent.transform(this.currentServiceDate,"EEEE, MMMM d, y");
    console.log( this.currentServiceDateFormatted);

    this.upcomingServiceDate.setDate(dateObj.getDate() + this.upcomingServiceInDays);
    this.upcomingServiceDateFormatted = this.datePipeUpcoming.transform(this.upcomingServiceDate,"EEEE, MMMM d, y" );
    console.log( this.upcomingServiceDateFormatted);

          /////////////////////////////////Start writing logic for full maintenance view//////////////////////
    this.daysFor5000kms = (5000/this.kmsPerDay);

    var datePipeForLoop = new DatePipe('en-US');
    var nextServiceDate = new Date();
    this.currentServiceDateForLoop = this.currentServiceDate;
    for (let i = 0; i < 15; i++) {
     nextServiceDate.setDate(this.currentServiceDateForLoop.getDate() + this.daysFor5000kms)
      this.upcomingServiceDatesArray[i] = datePipeForLoop.transform(nextServiceDate,'MMM d, y');
     this.currentServiceDateForLoop.setDate(this.currentServiceDateForLoop.getDate() +  this.daysFor5000kms);
    }

    var currentServiceInKmsForLoop = this.currentService;
    for (let x = 0; x < 15; x++){
      this.upcomingServiceInKmsArray[x] = currentServiceInKmsForLoop + 5000;
      currentServiceInKmsForLoop = currentServiceInKmsForLoop + 5000;
    }

          /////////////////////////////////End writing logic for full maintenance view//////////////////////
   //-------------------------------------------------------------------
  }

  getUserCarMaintenanceScheduleSummaryView(){
  this.userCarMaintenanceScheduleSummaryView = true;
  this.userCarMaintenanceScheduleFullView = false;
  }

  getUserCarMaintenanceScheduleFullView(){
  this.userCarMaintenanceScheduleSummaryView = false;
  this.userCarMaintenanceScheduleFullView = true;
  }

}
