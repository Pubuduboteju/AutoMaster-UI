import { Component, OnInit } from '@angular/core';
import {Car, Dimensions} from '../../models';
import {VehicleCompareService} from "./vehicle-compare.service";
import {VehicleDetailsService} from "../vehicle-details/vehicle-details.service";
// import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-vehicle-compare',
  templateUrl: './vehicle-compare.component.html',
  styleUrls: ['./vehicle-compare.component.css']
})
export class VehicleCompareComponent implements OnInit {
  public cars: Car[] = [];
  public car: Car;
  public car2: Car;

  public carDimensions: Dimensions;
  public carOnStartData:Dimensions[] = [];
  public carDim1: Dimensions;
  public carDim2: Dimensions;

  constructor(private vehicleCompareService: VehicleCompareService, private vehicleDetailsService: VehicleDetailsService) { }

  ngOnInit() {
    this.getAllCars();
    this.getOnStartData();
  }

  getAllCars() {

    this.vehicleCompareService.getAllCar()
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

  carOnChange2($event: any){
    this.getCarById2($event);
  }

  getCarById(id: string) {
    this.vehicleCompareService.getCar(id)
      .subscribe(res => {
        this.car=res;
        console.log(res);
      })

  }

  getCarById2(id: string) {
    this.vehicleCompareService.getCar(id)
      .subscribe(res => {
        this.car2=res;
        console.log(res);
      })

  }

  getOnStartData(){
    this.vehicleDetailsService.getOnStartData()
      .subscribe(
        res => {
          this.carOnStartData = res;
          this.carDim1 = this.carOnStartData[0];
          this.carDim2 = this.carOnStartData[1];
          console.log(this.carOnStartData);
        }, error => {
          console.log(error);
        }
      );
  }

}
