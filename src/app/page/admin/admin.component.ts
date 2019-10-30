import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralUserMessagesService} from "./general-user-messages/general-user-messages.service";
import {GeneralUserMessage} from "../../models";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  board: string;
  errorMessage: string;

  private generalUserMessagesForCount: GeneralUserMessage[] = [];
  public nonRepliedGeneralUserMessage:Number;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private generalUserMessagesService: GeneralUserMessagesService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );

    this.getAllGeneralUserMessages();
  }

  getAllGeneralUserMessages() {

    this.generalUserMessagesService.getAllGeneralUserMessages()
      .subscribe(
        res => {
          this.generalUserMessagesForCount = res;
          // this.userComments = res1;
          var i:number = 0;
          this.generalUserMessagesForCount.forEach(function (data) {
            if(!data.isReplied){
              i++;
            }

          })
          this.nonRepliedGeneralUserMessage = i;
          console.log(this.generalUserMessagesForCount);
        }, error => {
          console.log(error);
        }
      );
  }

  showAddVehicleToTheSystemView(){
    // this.addNewUserVehicle = true;
    // this.viewMyVehicle = false;
    this.router.navigate(['admin-car-register'], {relativeTo: this.route});
  }

  showViewVehiclesIntTheSystemView(){
    // this.addNewUserVehicle = true;
    // this.viewMyVehicle = false;
    this.router.navigate(['admin-car-view'], {relativeTo: this.route});
  }

  showVehicleUpdateView(){
    this.router.navigate(['admin-car-update'], {relativeTo: this.route});
  }

  showVehicleDeleteView(){
    this.router.navigate(['admin-car-delete'], {relativeTo: this.route});
  }

  showAddVehicleNewsView(){
    this.router.navigate(['vehicle-news-add'], {relativeTo: this.route});
  }

  showViewDeleteVehicleNewsView(){
    this.router.navigate(['vehicle-news-view-delete'], {relativeTo: this.route});
  }

  showGeneralUserMessageView(){
    this.router.navigate(['general-user-messages'], {relativeTo: this.route});
  }

  showVehicleForumsView(){
    this.router.navigate(['admin-user-comments'], {relativeTo: this.route});
  }

  showServiceStationsView(){
    this.router.navigate(['service-stations'], {relativeTo: this.route});
  }

  showServiceAppointmentsView(){
    this.router.navigate(['service-appointments'], {relativeTo: this.route});
  }


}
