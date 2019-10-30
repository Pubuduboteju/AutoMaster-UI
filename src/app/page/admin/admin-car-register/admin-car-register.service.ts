import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminCarRegisterService {

  constructor(private _httpClient: HttpClient) {

  }

  create(value: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('vehicleModel', value.vehicleModel);
    formData.append('vehicleMake', value.vehicleMake);
    formData.append('trim_edition', value.trim_edition);
    formData.append('modelYear', value.modelYear);
    formData.append('bodyType', value.bodyType);
    formData.append('engineCapacity', value.engineCapacity);
    formData.append('transmission', value.transmission);
    formData.append('fuelType', value.fuelType);

    console.log(file);
    const URL = environment.host + '/adminCars';
    return this._httpClient.post<any>(URL, formData, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
