import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserCars} from "../../../models";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/internal/operators";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class UserCarDeleteService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllUserCars(): Observable<UserCars[]> {

    const URL = environment.host + '/userCars/getAllUserCars';
    return this._httpClient.get<UserCars[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

  deleteUserCar(id: string ): Observable<any>{
    const URL = environment.host + '/userCars/deleteUserCar?id='+id;
    return this._httpClient.post<any>(URL,{
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });

  }
}
