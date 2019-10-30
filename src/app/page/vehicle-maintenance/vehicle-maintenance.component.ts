import { Component, OnInit } from '@angular/core';
import {VehicleDetailsService} from "../vehicle-details/vehicle-details.service";
import {Car} from "../../models";

@Component({
  selector: 'app-vehicle-maintenance',
  templateUrl: './vehicle-maintenance.component.html',
  styleUrls: ['./vehicle-maintenance.component.css']
})
export class VehicleMaintenanceComponent implements OnInit {
  public cars: Car[] = [];
  public car: Car;
  private carNames: String[] = [];


  constructor(private vehicleDetailsService: VehicleDetailsService) {

  }

  ngOnInit() {
    this.getAllCars();
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

  }

}
