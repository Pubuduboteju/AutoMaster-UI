import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Car, Dimensions} from '../../models';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleDetailsService {

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

  getCarDimensions(id:string): Observable<Dimensions> {

    const URL = environment.host + '/car/dimensions?id='+id;
    return this._httpClient.get<Dimensions[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

  getOnStartData(): Observable<Dimensions[]> {

    const URL = environment.host + '/car/onStartData';
    return this._httpClient.get<Dimensions[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }

}
