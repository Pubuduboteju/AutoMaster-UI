import { Component, OnInit } from '@angular/core';
import {VehicleNews} from "../../../models";
import {VehicleNewsViewDeleteService} from "./vehicle-news-view-delete.service";
import {VehicleNewsService} from "../../home/vehicle-news/vehicle-news.service";
import {ToastrService} from "ngx-toastr";
import {ConfirmationDialogService} from "../../confirmation-dialog/confirmation-dialog.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vehicle-news-view-delete',
  templateUrl: './vehicle-news-view-delete.component.html',
  styleUrls: ['./vehicle-news-view-delete.component.css']
})
export class VehicleNewsViewDeleteComponent implements OnInit {
  private vehicleNews: VehicleNews[] = [];

  constructor(private vehicleNewsViewDeleteService: VehicleNewsViewDeleteService, private vehicleNewsService: VehicleNewsService,  private router: Router, private route: ActivatedRoute,  private confirmationDialogService: ConfirmationDialogService,  private toastr: ToastrService) { }

  ngOnInit() {
    this.getAllVehicleNews();
  }

  getAllVehicleNews() {

    this.vehicleNewsService.getAllVehicleNews()
      .subscribe(
        res => {
          this.vehicleNews = res;
          console.log(this.vehicleNews);
        }, error => {
          console.log(error);
        }
      );
  }

  successmsg(){
    this.toastr.success("You have successfully deleted your vehicle!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your vehicle registration was not successful",'Error')

  }

  deleteSelectedVehicleNews(id: string){
    this.confirmationDialogService.confirm('Please confirm your deletion', 'Do you really want to delete this vehicle news?')
    // .then((confirmed) => console.log('User confirmed:', confirmed))
      .then((confirmed) => { if(confirmed){
        this.vehicleNewsViewDeleteService.deleteVehicleNews(id)
          .subscribe(
            res => {
              // this.userCars = res;
              console.log(res);
              if(res.statusDescription == 'Success'){
                this.successmsg();
              }else{
                this.errorsmsg();
              }
              // window.location.reload();
              ////////////////////////////////
              this.vehicleNewsService.getAllVehicleNews()
                .subscribe(
                  res => {
                    this.vehicleNews = res;
                    console.log(this.vehicleNews);
                  }, error => {
                    console.log(error);
                  }
                );
              ///////////////////////////////
            }, error => {
              console.log(error);
            }
          );
      }})
      // .then( ((confirmed) => this.isDelete = confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));

  }

}
