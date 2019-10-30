import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import {GeneralUserMessage} from "../../../models";
import {environment} from "../../../../environments/environment";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralUserMessagesService {

  constructor(private _httpClient: HttpClient) {

  }

  getAllGeneralUserMessages(): Observable<GeneralUserMessage[]> {

    const URL = environment.host + '/adminCars/getAllGeneralUserMessages';
    return this._httpClient.get<GeneralUserMessage[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

  createReply(value: any): Observable<any> {
    const URL = environment.host + '/sendMail';
    return this._httpClient.post<GeneralUserMessage>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }

  updateGeneralUserMessage(value: any): Observable<any> {

    console.log(value);
    const URL = environment.host + '/adminCars/updateGeneralUserMessage';
    return this._httpClient.post<any>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }

  deleteGeneralUserMessage(id: string ): Observable<any>{
    const URL = environment.host + '/adminCars/deleteGeneralUserMessage?id='+id;
    return this._httpClient.post<any>(URL,{
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });

  }
}
