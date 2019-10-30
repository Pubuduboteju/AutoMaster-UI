import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/Rx";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminUserCommentsService {

  constructor(private _httpClient: HttpClient) {

  }

  deleteAdminUserComments(id: string ): Observable<any>{
    const URL = environment.host + '/adminCars/deleteUserComments?id='+id;
    return this._httpClient.post<any>(URL,{
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });

  }
}
