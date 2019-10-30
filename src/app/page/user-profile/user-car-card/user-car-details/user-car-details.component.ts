import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {UserCarDetailsService} from "./user-car-details.service";

@Component({
  selector: 'app-user-car-details',
  templateUrl: './user-car-details.component.html',
  styleUrls: ['./user-car-details.component.css']
})
export class UserCarDetailsComponent implements OnInit {
  userCar: UserCars;
  userCarId: string;

  constructor(private userCarDetailsService: UserCarDetailsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.userCarId = this.route.snapshot.queryParamMap.get("id");
    this.route.queryParamMap.subscribe(queryParams => {
      this.userCarId = queryParams.get("id");
      this.userCarDetailsService.getUserCar(this.userCarId)
        .subscribe(res => {
          this.userCar = res;
          console.log(this.userCar);
        });
    });
  }

}
