import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import {VehicleNews} from "../../../models";
import {environment} from "../../../../environments/environment";
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleNewsService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllVehicleNews(): Observable<VehicleNews[]> {

    const URL = environment.host + '/car/getAllVehicleNews';
    return this._httpClient.get<VehicleNews[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
