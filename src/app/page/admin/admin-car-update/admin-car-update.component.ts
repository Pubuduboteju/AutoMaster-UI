import { Component, OnInit } from '@angular/core';
import {Car} from "../../../models";
import {AdminCarUpdateService} from "./admin-car-update.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-car-update',
  templateUrl: './admin-car-update.component.html',
  styleUrls: ['./admin-car-update.component.css']
})
export class AdminCarUpdateComponent implements OnInit {
  private adminCars: Car[] = [];

  constructor(private adminCarUpdateService: AdminCarUpdateService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {

    this.adminCarUpdateService.getAllCar()
      .subscribe(
        res => {
          this.adminCars = res;
          console.log(this.adminCars);
        }, error => {
          console.log(error);
        }
      );
  }

  goToAdminCarUpdateForm(id : string){
    this.router.navigate(['admin-car-update-form'], {relativeTo: this.route, queryParams: {id: id}});
  }

}
