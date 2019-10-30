import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserCarUpdateFormService {

  constructor(private _httpClient: HttpClient) {

  }

  updateUserCar(value: any): Observable<any> {

    console.log(value);
    const URL = environment.host + '/userCars/updateUserCars';
    return this._httpClient.post<any>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
