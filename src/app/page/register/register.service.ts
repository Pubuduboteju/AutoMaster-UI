import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../../models';
// import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _httpClient: HttpClient) {

  }

  create(value: any): Observable<any> {
    // const formData: FormData = new FormData();
    // formData.append('userName', value.userName);
    // formData.append('firstName', value.firstName);
    // formData.append('lastName', value.lastName);
    // formData.append('phoneNo', value.phoneNo);
    // formData.append('email', value.email);
    // formData.append('password', value.password);

    // console.log(file);
    const URL = environment.host + '/user';
    return this._httpClient.post<User>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
