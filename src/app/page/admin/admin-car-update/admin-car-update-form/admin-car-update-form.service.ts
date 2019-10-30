import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminCarUpdateFormService {

  constructor(private _httpClient: HttpClient) {

  }

  updateAdminCar(value: any): Observable<any> {

    console.log(value);
    const URL = environment.host + '/adminCars/updateAdminCars';
    return this._httpClient.post<any>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
