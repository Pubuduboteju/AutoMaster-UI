import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../../models";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private _httpClient: HttpClient) {
  }


  getCar(id:string): Observable<Car> {

    const URL = environment.host + '/car?id='+id;
    return this._httpClient.get<Car[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

  getAllCar(): Observable<Car[]> {

    const URL = environment.host + '/car/';
    return this._httpClient.get<Car[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }




}
