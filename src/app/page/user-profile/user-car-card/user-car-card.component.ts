import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserCars} from "../../../models";
import {UserCarCardService} from "./user-car-card.service";

@Component({
  selector: 'app-user-car-card',
  templateUrl: './user-car-card.component.html',
  styleUrls: ['./user-car-card.component.css']
})
export class UserCarCardComponent implements OnInit {

  // @Input() public userCars: UserCars;
  private userCars: UserCars[] = [];
  private file: File;
  public addNewUserVehicle:boolean = false;
  public viewMyVehicle:boolean = false;

  constructor(private userCarCardService: UserCarCardService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllUserCars();
  }

  getAllUserCars() {

    this.userCarCardService.getAllUserCars()
      .subscribe(
        res => {
          this.userCars = res;
          console.log(this.userCars);
        }, error => {
          console.log(error);
        }
      );
  }

  showDetails(id: string) {
    // this.router.navigate(["user-car-details"], { queryParams: {id: id}});
    const referrer = this.userCarCardService.getPreviousUrl();
    this.router.navigate(['user-car-details'], {relativeTo: this.route, queryParams: {id: id}});
    // this.router.navigateByUrl( referrer);
    // this.router.navigateByUrl('user-profile/user-car-details',{queryParams:{id: id}});
    // this.router.navigate(['/user-car-details', {id: id}]);
  }

}
