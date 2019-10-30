import {Component, OnInit} from '@angular/core';
import {Car, Dimensions} from '../../models';
import {VehicleDetailsService} from "./vehicle-details.service";
// import {forEach} from "@angular/router/src/utils/collection";


@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  public cars: Car[] = [];
  public car: Car;
  private carNames: String[] = [];

  public carDimensions: Dimensions;
  public carOnStartData:Dimensions[] = [];
  public carDim1: Dimensions;
  public carDim2: Dimensions;

  constructor(private vehicleDetailsService: VehicleDetailsService) {
  }

  ngOnInit() {
    this.getAllCars();
    this.getOnStartData();
  }

  getAllCars() {

    this.vehicleDetailsService.getAllCar()
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
    this.vehicleDetailsService.getCar(id)
      .subscribe(res => {
        this.car=res;
        console.log(res);
    })

    // this.vehicleDetailsService.getCarDimensions(this.car.id)
    //   .subscribe(res1 => {
    //     this.carDimensions=res1;
    //     console.log(res1);
    //   })

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
