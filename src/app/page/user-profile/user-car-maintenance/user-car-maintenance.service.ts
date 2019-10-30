import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {UserCars} from "../../../models";
import {environment} from "../../../../environments/environment";
import {promise} from "selenium-webdriver";
import {map} from "rxjs/internal/operators";


@Injectable({
  providedIn: 'root'
})
export class UserCarMaintenanceService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllUserCars(): Observable<UserCars[]> {

    const URL = environment.host + '/userCars/getAllUserCars';
    return this._httpClient.get<UserCars[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
