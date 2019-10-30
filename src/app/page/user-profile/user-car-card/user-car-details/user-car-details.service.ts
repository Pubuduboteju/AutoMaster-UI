import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserCars} from "../../../../models";
import {Observable} from "rxjs/index";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserCarDetailsService {

  constructor(private _httpClient: HttpClient) {

  }

  getUserCar(id:string): Observable<UserCars> {

    const URL = environment.host + '/userCars?id='+id;
    return this._httpClient.get<UserCars[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
