import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Car} from "../../../../models";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AdminCarViewDetailsService {

  constructor(private _httpClient: HttpClient) {

  }

  getAdminCar(id:string): Observable<Car> {

    const URL = environment.host + '/adminCars?id='+id;
    return this._httpClient.get<Car[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
