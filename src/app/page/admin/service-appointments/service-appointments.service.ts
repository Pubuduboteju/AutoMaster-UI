import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import {ServiceAppointment} from "../../../models";
import {environment} from "../../../../environments/environment";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppointmentsService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllServiceAppointments(): Observable<ServiceAppointment[]> {

    const URL = environment.host + '/adminCars/getAllServiceAppointments';
    return this._httpClient.get<ServiceAppointment[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

  deleteServiceAppointment(id: string ): Observable<any>{
    const URL = environment.host + '/adminCars/deleteServiceAppointment?id='+id;
    return this._httpClient.post<any>(URL,{
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });

  }
}
