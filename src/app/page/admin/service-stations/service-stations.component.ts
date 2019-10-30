import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AngularFireDatabase} from "@angular/fire/database";
import {ServiceStation} from "../../../models";
import {map} from "rxjs/internal/operators";
import {ServiceStationsService} from "./service-stations.service";

@Component({
  selector: 'app-service-stations',
  templateUrl: './service-stations.component.html',
  styleUrls: ['./service-stations.component.css']
})
export class ServiceStationsComponent implements OnInit {

  //public serviceStations: Observable<any[]>;
  // public serviceStation: ServiceStation = {};
  public serviceStation: Object = {} ;
  public serviceStations: any;
  // public serviceStationKeys: Observable<any[]>;

  // constructor( public db: AngularFireDatabase) {
  //   // this.serviceStations = db.list('serviceStations').valueChanges();
  //   // this.serviceStations = db.list('serviceStations').snapshotChanges();
  //   this.serviceStations = db.list('serviceStations').snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ key: c.payload.key, ...c.payload.val() })
  //       )
  //     )
  //   ).subscribe(serviceStations => {
  //     this.serviceStations = serviceStations;
  //   });
  //   console.log(this.serviceStations);
  // }

  constructor( private serviceStationsService: ServiceStationsService, public db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.getAllStationList();
  }

  getAllStationList() {
    this.serviceStationsService.getAllStationList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(res => {
      this.serviceStations = res;
    });
  }

  onCreateServiceStation(){
    console.log(this.serviceStation)
    this.db.list('serviceStations').push(this.serviceStation);
    // this.db.list('serviceStations').push({ longitude: this.longitude});
    this.serviceStation = {};
  }
  deleteSelectedStation(key: string):Promise<void>{
    return this.db.list('serviceStations').remove(key);
  }

}
