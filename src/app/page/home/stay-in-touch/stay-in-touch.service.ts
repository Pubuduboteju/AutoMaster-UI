import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import {environment} from "../../../../environments/environment";
import {GeneralUserMessage} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class StayInTouchService {

  constructor(private _httpClient: HttpClient) {

  }

  create(value: any): Observable<any> {
    const URL = environment.host + '/car/saveGeneralUserMessage';
    return this._httpClient.post<GeneralUserMessage>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }

  createEmail(value: any): Observable<any> {
    const URL = environment.host + '/sendMail';
    return this._httpClient.post<GeneralUserMessage>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
