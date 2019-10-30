import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Car, ServiceAppointment, ServiceStation} from '../../models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map} from "rxjs/internal/operators";
import {TokenStorageService} from "../auth/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Component({
             selector: 'app-home',
             templateUrl: './home.component.html',
             styleUrls: ['./home.component.css']
           })
export class HomeComponent implements OnInit {
  createCarForm: FormGroup;
  private cars: Car[] = [];
  private file: File;
  latitude = 6.9553;
  longitude = 79.922;
  // mapType = 'satellite';
  mapType = 'roadmap'

  serviceAppointmentMessageForm: FormGroup;
  public serviceStations: any;
  public serviceStationNames:string[] = [];
  public markers:any = [];
  public stationName:string;
  public stationEmail:string;
  public stationAddress:string;
  public stationPhoneNo:string;
  public serviceRequestView:boolean;

  private roles: string[];
  private authority: string;
  private userName:string;


  constructor(private homeService: HomeService, private formBuilder: FormBuilder, private tokenStorage: TokenStorageService, private toastr: ToastrService, private router: Router) {
  }


  ngOnInit() {
    this.getAllCars();

    this.createCarForm = this.formBuilder.group(
      {
        'vehicleModel': [null, Validators.compose([Validators.required])],
        'vehicleMake': [null, Validators.compose([Validators.required])],
        'trim_edition': [null, Validators.compose([Validators.required])],
        'modelYear': [null, Validators.compose([Validators.required])],
        'bodyType': [null, Validators.compose([Validators.required])],
        'engineCapacity': [null, Validators.compose([Validators.required])],
        'transmission': [null, Validators.compose([Validators.required])],
        'fuelType': [null, Validators.compose([Validators.required])],
        'file': [null, Validators.compose([Validators.required])],
      });

    this.serviceAppointmentMessageForm = this.formBuilder.group(
      {
        // 'id': [null, Validators.compose([Validators.required])],
        'userName': [null, Validators.compose([Validators.required])],
        'email': [null, Validators.compose([Validators.required])],
        'phoneNo': [null, Validators.compose([Validators.required])],
        'serviceRequired': [null, Validators.compose([Validators.required])],
        'otherDetails': [null, Validators.compose([Validators.required])],
      });


    this.getAllStationList();

    this.userName = this.tokenStorage.getUsername();

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  successmsg(){
    this.toastr.success("You have successfully sent a service request, we will reply you soon!",'Successful !!!')
  }
  errorsmsg(){
    this.toastr.error("Your service request was not successfully sent",'Error')

  }


  getAllCars() {

    this.homeService.getAllCar()
        .subscribe(
          res => {
            this.cars = res;
            console.log(this.cars);
          }, error => {
            console.log(error);
          }
        );
  }


  onCreateNewCar(value: any) {
    value.file = this.file;
    console.log(value);
    this.homeService.create(value, this.file)
        .subscribe(
          res => {
            console.log(res);
          }, error => {
            console.log(error);
          }
        );
  }


  fileChange(event) {
    const fileList: FileList = event.target.files;
    const file: File = fileList[0];
    this.file = file;
    console.log(file);
  }

  getAllStationList() {
    this.homeService.getAllStationList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(res => {
      this.serviceStations = res;
      console.log(this.serviceStations);
      // var i:number = 0;
      // var x:number = 0;
      var serviceStationNamesTemp = new Array<string>(this.serviceStations.length);
      // for(var i=0; i<this.serviceStations.length; i++){
      //   serviceStationNamesTemp[i] = 'city';
      // }
      var i:number = 0;
      this.serviceStations.forEach(function (data) {
        // serviceStationNamesTemp[0] = data.mainCity;

        // serviceStationNamesTemp.forEach(function (data1) {
        //   if(data1 == data.mainCity){
        //     return true;
        //   }
        //   if(data1 != data.mainCity){
        //     serviceStationNamesTemp[i] = data.mainCity;
        //     i++;
        //     return true;
        //   }
        //
        //
        // })
        var noDataVar = false;
        for( let x =0; x<serviceStationNamesTemp.length; x++){
          if(serviceStationNamesTemp[x] == data.mainCity){
            noDataVar = false;
            break
          }
          if(serviceStationNamesTemp[x] != data.mainCity){
            // serviceStationNamesTemp[i] = data.mainCity;
            // i++;
            noDataVar = true;
            // break
          }
        }
        if(noDataVar){
          serviceStationNamesTemp[i] = data.mainCity;
          i++;
        }

      })
      this.serviceStationNames = serviceStationNamesTemp;
      this.serviceStationNames = this.serviceStationNames.filter(Boolean);
      console.log(this.serviceStationNames);

    });
  }

  stationsOnChange(mainCityData){
    var i = 0;
    var markersTemp = [];
    this.serviceStations.forEach(function (data) {
     if(data.mainCity == mainCityData){
       // markersTemp[i].lat = data.latitude;
       // markersTemp[i].lng = data.longitude;
       // markersTemp[i].alpha = 1;
       markersTemp[i] = data;
       i++;
     }

    })
    this.markers =markersTemp;
    console.log(this.markers);
  }


  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
  }

  onMouseOut(infoWindow, $event: MouseEvent) {
    infoWindow.close();
  }

  createServiceAppointmentMessageForm(data: ServiceAppointment){
    this.serviceAppointmentMessageForm = this.formBuilder.group(
      {
        // 'id': [data.id, Validators.compose([Validators.required])],
        // 'firstName': [data.firstName, Validators.compose([Validators.required])],
        'userName': [this.userName, Validators.compose([Validators.required])],
        'email': [data.email, Validators.compose([Validators.required])],
        'phoneNo': [null, Validators.compose([Validators.required])],
        'serviceRequired': [null, Validators.compose([Validators.required])],
        'otherDetails': [null, Validators.compose([Validators.required])],
      });
    this.stationName = data.stationName;
    this.stationEmail = data.stationEmail;
    this.stationAddress = data.stationAddress;
    this.stationPhoneNo = data.stationPhoneNo;

  }

  onRequestServiceAppointment(value: any){
    value.stationName = this.stationName;
    value.stationEmail = this.stationEmail;
    value.stationAddress = this.stationAddress;
    value.stationPhoneNo = this.stationPhoneNo;
    value.senderEmail = value.email;
    value.email =  this.stationEmail;
    value.emailType = 'serviceAppointment';
    console.log(value);
    var str = value.userName;
    str = str ? str.charAt(0).toUpperCase() + str.substr(1).toLowerCase() : '';
    value.firstName = str;
    const serviceRequestEmailData = value;
    this.homeService.createServiceAppointment(value)
      .subscribe(
        res => {
          console.log(res);
          if(true){
            ///////////
            // serviceRequestEmailData.senderEmail = serviceRequestEmailData.email;
            // serviceRequestEmailData.email = "automastervehicleconsultancy@gmail.com"
            this.homeService.createEmail(serviceRequestEmailData)
              .subscribe(
                res => {
                  console.log(res);
                }, error => {
                  console.log(error);
                }
              );
            ///////////
            this.successmsg();
          }else{
            this.errorsmsg();
          }
          this.serviceAppointmentMessageForm = this.formBuilder.group(
            {
              // 'id': [data.id, Validators.compose([Validators.required])],
              // 'firstName': [data.firstName, Validators.compose([Validators.required])],
              'userName': [null, Validators.compose([Validators.required])],
              'email': [null, Validators.compose([Validators.required])],
              'phoneNo': [null, Validators.compose([Validators.required])],
              'serviceRequired': [null, Validators.compose([Validators.required])],
              'otherDetails': [null, Validators.compose([Validators.required])],
            });
        }, error => {
          console.log(error);
        }
      );

  }

  serviceRequestViewMake(){
    this.serviceRequestView = true;
  }
}
