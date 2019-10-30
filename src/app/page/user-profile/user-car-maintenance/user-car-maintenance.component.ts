import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../../models";
import {UserCarMaintenanceService} from "./user-car-maintenance.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-car-maintenance',
  templateUrl: './user-car-maintenance.component.html',
  styleUrls: ['./user-car-maintenance.component.css']
})
export class UserCarMaintenanceComponent implements OnInit {

  private userCars: UserCars[] = [];


  constructor(private userCarMaintenanceService: UserCarMaintenanceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllUserCars();
  }

  getAllUserCars() {

    this.userCarMaintenanceService.getAllUserCars()
      .subscribe(
        res => {
          this.userCars = res;
          console.log(this.userCars);
        }, error => {
          console.log(error);
        }
      );
  }

  goToMaintenanceSchedule(id : string){
    this.router.navigate(['user-car-maintenance-schedule'], {relativeTo: this.route, queryParams: {id: id}});
  }

}
