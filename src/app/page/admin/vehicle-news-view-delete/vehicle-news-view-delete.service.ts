import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleNewsViewDeleteService {

  constructor(private _httpClient: HttpClient) {

  }

  deleteVehicleNews(id: string ): Observable<any>{
    const URL = environment.host + '/adminCars/deleteVehicleNews?id='+id;
    return this._httpClient.post<any>(URL,{
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });

  }
}
