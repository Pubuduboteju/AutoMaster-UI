import { Component, OnInit } from '@angular/core';
import {VehicleNews} from "../../../models";
import {VehicleNewsService} from "./vehicle-news.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-vehicle-news',
  templateUrl: './vehicle-news.component.html',
  styleUrls: ['./vehicle-news.component.css']
})
export class VehicleNewsComponent implements OnInit {
  private vehicleNews: VehicleNews[] = [];
  private vehicleNews1: VehicleNews[] = [];
  private vehicleNews2: VehicleNews[] = [];

  constructor(private vehicleNewsService: VehicleNewsService) { }

  ngOnInit() {
    this.getAllVehicleNews();
  }

  getAllVehicleNews() {

    this.vehicleNewsService.getAllVehicleNews()
      .subscribe(
        res => {
          this.vehicleNews = res;
          // this.vehicleNews[0].newsDate = new Date( this.vehicleNews[0].newsDate);

          // var i:number = 0;
          // let showUserCom = []
          this.vehicleNews.forEach(function (data) {
            var covertDBStringDate = new Date(data.newsDate);
            var datePipeNewsDate = new DatePipe('en-US');
            var newsDateFormatted = datePipeNewsDate.transform(covertDBStringDate, "EEE, MMM d, y");
            data.newsDateString = newsDateFormatted;
            // i++;
          })

          this.vehicleNews1 = this.vehicleNews.slice(0,3);
          this.vehicleNews2 = this.vehicleNews.slice(3,5);
          console.log(this.vehicleNews);
        }, error => {
          console.log(error);
        }
      );
  }

}
