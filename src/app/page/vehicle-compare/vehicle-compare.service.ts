import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Car} from '../../models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleCompareService {

  constructor(private _httpClient: HttpClient) {

  }
  getAllCar(): Observable<Car[]> {

    const URL = environment.host + '/car/';
    return this._httpClient.get<Car[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

  getCar(id:string): Observable<Car> {

    const URL = environment.host + '/car?id='+id;
    return this._httpClient.get<Car[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
