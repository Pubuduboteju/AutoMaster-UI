import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleNewsAddService {

  constructor(private _httpClient: HttpClient) {

  }

  create(value: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('title', value.title);
    formData.append('subTitle', value.subTitle);
    formData.append('description', value.description);
    formData.append('newsDate', value.newsDate);

    console.log(file);
    const URL = environment.host + '/adminCars/saveVehicleNews';
    return this._httpClient.post<any>(URL, formData, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
