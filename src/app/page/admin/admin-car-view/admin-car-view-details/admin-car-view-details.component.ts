import { Component, OnInit } from '@angular/core';
import {Car} from "../../../../models";
import {AdminCarViewDetailsService} from "./admin-car-view-details.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-car-view-details',
  templateUrl: './admin-car-view-details.component.html',
  styleUrls: ['./admin-car-view-details.component.css']
})
export class AdminCarViewDetailsComponent implements OnInit {
  adminCar: Car;
  adminCarId: string;

  constructor(private adminCarViewDetailsService: AdminCarViewDetailsService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.adminCarId = this.route.snapshot.queryParamMap.get("id");
    this.route.queryParamMap.subscribe(queryParams => {
      this.adminCarId = queryParams.get("id");
      this.adminCarViewDetailsService.getAdminCar(this.adminCarId)
        .subscribe(res => {
          this.adminCar = res;
          console.log(this.adminCar);
        });
    });
  }

}
