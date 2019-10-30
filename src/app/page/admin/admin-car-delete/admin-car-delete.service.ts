import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";
import {Car} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class AdminCarDeleteService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllCar(): Observable<Car[]> {

    const URL = environment.host + '/adminCars/';
    return this._httpClient.get<Car[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

  deleteAdminCar(id: string ): Observable<any>{
    const URL = environment.host + '/adminCars/deleteAdminCar?id='+id;
    return this._httpClient.post<any>(URL,{
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });

  }
}
