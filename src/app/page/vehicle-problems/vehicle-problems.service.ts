import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Car, UserComments, User} from '../../models';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleProblemsService {

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

  getAllUserComments(): Observable<UserComments[]> {

    const URL = environment.host + '/car/getAllUserComments';
    return this._httpClient.get<UserComments[]>(URL)
      .pipe(
        map(value => value['content']),
      );
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
    const URL = environment.host + '/userComments';
    return this._httpClient.post<UserComments>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }

}
