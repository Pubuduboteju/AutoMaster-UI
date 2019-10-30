import { Component, OnInit } from '@angular/core';
import {UserCars} from "../../../models";
import {UserCarUpdateService} from "./user-car-update.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-car-update',
  templateUrl: './user-car-update.component.html',
  styleUrls: ['./user-car-update.component.css']
})
export class UserCarUpdateComponent implements OnInit {

  private userCars: UserCars[] = [];

  constructor(private userCarUpdateService: UserCarUpdateService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllUserCars();
  }

  getAllUserCars() {

    this.userCarUpdateService.getAllUserCars()
      .subscribe(
        res => {
          this.userCars = res;
          console.log(this.userCars);
        }, error => {
          console.log(error);
        }
      );
  }

  goToUserCarUpdateForm(id : string){
    this.router.navigate(['user-car-update-form'], {relativeTo: this.route, queryParams: {id: id}});
  }

}
