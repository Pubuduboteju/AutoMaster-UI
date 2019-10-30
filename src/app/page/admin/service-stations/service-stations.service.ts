import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {ServiceStation} from "../../../models";

@Injectable({
  providedIn: 'root'
})
export class ServiceStationsService {

  private dbPath = '/serviceStations';

  stationsRef: AngularFireList<ServiceStation> = null;

  constructor(private db: AngularFireDatabase) {
    this.stationsRef = db.list(this.dbPath);
  }

  getAllStationList(): AngularFireList<ServiceStation> {
    return this.stationsRef;
  }
}
