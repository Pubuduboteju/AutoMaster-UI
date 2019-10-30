import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserCarRegisterService {

  constructor(private _httpClient: HttpClient) {

  }

  registerUserCars(value: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('userName', value.userName);
    formData.append('vehicleModel', value.vehicleModel);
    formData.append('vehicleMake', value.vehicleMake);
    formData.append('modelYear', value.modelYear);
    formData.append('bodyType', value.bodyType);
    formData.append('engineCapacity', value.engineCapacity);
    formData.append('transmission', value.transmission);
    formData.append('fuelType', value.fuelType);
    formData.append('chassisNumber', value.chassisNumber);
    formData.append('vehicleNumber', value.vehicleNumber);
    formData.append('registeredYear', value.registeredYear);
    formData.append('currentMileage', value.currentMileage);
    formData.append('lastEngineOilChange', value.lastEngineOilChange);
    formData.append('lastEngineOilFilterChange', value.lastEngineOilFilterChange);
    formData.append('lastGearOilChange', value.lastGearOilChange);


    console.log(file);
    const URL = environment.host + '/userCars/registerUserCars';
    return this._httpClient.post<any>(URL, formData, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
