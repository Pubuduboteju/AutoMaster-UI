import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Car, ServiceAppointment, ServiceStation} from '../../models';
import {map} from 'rxjs/operators';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";


@Injectable({
              providedIn: 'root'
            })
export class HomeService {

  private dbPath = '/serviceStations';

  stationsRef: AngularFireList<ServiceStation> = null;
  constructor(private _httpClient: HttpClient, private db: AngularFireDatabase) {
    this.stationsRef = db.list(this.dbPath);
  }


  getAllCar(): Observable<Car[]> {

    const URL = environment.host + '/car/';
    return this._httpClient.get<Car[]>(URL)
               .pipe(
                 map(value => value['content']),
               );
  }


  create(value: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    formData.append('vehicleModel', value.vehicleModel);
    formData.append('vehicleMake', value.vehicleMake);
    formData.append('trim_edition', value.trim_edition);
    formData.append('modelYear', value.modelYear);
    formData.append('bodyType', value.bodyType);
    formData.append('engineCapacity', value.engineCapacity);
    formData.append('transmission', value.transmission);
    formData.append('fuelType', value.fuelType);

    console.log(file);
    const URL = environment.host + '/car';
    return this._httpClient.post<any>(URL, formData, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }

  getAllStationList(): AngularFireList<ServiceStation> {
    return this.stationsRef;
  }

  createServiceAppointment(value: any): Observable<any> {
    const URL = environment.host + '/car/saveServiceRequestAppointment';
    return this._httpClient.post<ServiceAppointment>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }

  createEmail(value: any): Observable<any> {
    const URL = environment.host + '/sendMail';
    return this._httpClient.post<ServiceAppointment>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }
}
