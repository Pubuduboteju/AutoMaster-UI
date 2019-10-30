import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";
import {Car} from "../../../models";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminCarUpdateService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllCar(): Observable<Car[]> {

    const URL = environment.host + '/adminCars/';
    return this._httpClient.get<Car[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
