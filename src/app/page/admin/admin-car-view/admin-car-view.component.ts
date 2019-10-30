import { Component, OnInit } from '@angular/core';
import {Car} from "../../../models";
import {AdminCarViewService} from "./admin-car-view.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-admin-car-view',
  templateUrl: './admin-car-view.component.html',
  styleUrls: ['./admin-car-view.component.css']
})
export class AdminCarViewComponent implements OnInit {
  private adminCars: Car[] = [];
  public adminCarsCount: Number;

  constructor(private adminCarViewService: AdminCarViewService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {

    this.adminCarViewService.getAllCar()
      .subscribe(
        res => {
          this.adminCars = res;
          this.adminCarsCount = this.adminCars.length;
          console.log(this.adminCars);
        }, error => {
          console.log(error);
        }
      );
  }

  showDetails(id: string) {
    // this.router.navigate(["user-car-details"], { queryParams: {id: id}});
    // const referrer = this.userCarCardService.getPreviousUrl();
    this.router.navigate(['admin-car-view-details'], {relativeTo: this.route, queryParams: {id: id}});
    // this.router.navigateByUrl( referrer);
    // this.router.navigateByUrl('user-profile/user-car-details',{queryParams:{id: id}});
    // this.router.navigate(['/user-car-details', {id: id}]);
  }

}
