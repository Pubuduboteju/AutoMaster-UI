import {Component, OnInit} from '@angular/core';
import {CarDetailService} from "./car-detail.service";
import {Car, Dimensions} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {VehicleDetailsService} from "../vehicle-details/vehicle-details.service";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  // car: Car;
  carId: string;

  public cars: Car[] = [];
  public car: Car;
  private carNames: String[] = [];

  public carDimensions: Dimensions;
  public carOnStartData:Dimensions[] = [];
  public carDim1: Dimensions;
  public carDim2: Dimensions;

  constructor(private carDetailService: CarDetailService, private route: ActivatedRoute, private vehicleDetailsService: VehicleDetailsService) {

  }

  ngOnInit() {
    this.carId = this.route.snapshot.queryParamMap.get("id");
    this.route.queryParamMap.subscribe(queryParams => {
      this.carId = queryParams.get("id");
      this.carDetailService.getCar(this.carId)
        .subscribe(res => {
          this.car = res;
          console.log(this.car);
        });
    });

    this.getAllCars();
    this.getOnStartData();

  }

  getAllCars() {

    this.carDetailService.getAllCar()
      .subscribe(
        res => {
          this.cars = res;
          console.log(this.cars);
        }, error => {
          console.log(error);
        }
      );
  }

  carOnChange($event: any) {
    this.getCarById($event);
  }

  getCarById(id: string) {
    this.carDetailService.getCar(id)
      .subscribe(res => {
        this.car=res;
        console.log(res);
      })

  }

  getOnStartData(){
    this.vehicleDetailsService.getOnStartData()
      .subscribe(
        res => {
          this.carOnStartData = res;
          this.carDim1 = this.carOnStartData[0];
          console.log(this.carOnStartData);
        }, error => {
          console.log(error);
        }
      );
  }

}
