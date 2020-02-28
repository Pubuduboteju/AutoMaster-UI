import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { HomeComponent } from './page/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CarCardComponent } from './page/home/car-card/car-card.component';
import { CarouselComponent } from './page/home/carousel/carousel.component';
import { CarDetailComponent } from './page/car-detail/car-detail.component';
import { VehicleDetailsComponent } from './page/vehicle-details/vehicle-details.component';
import { VehicleCompareComponent } from './page/vehicle-compare/vehicle-compare.component';
import { VehicleProblemsComponent } from './page/vehicle-problems/vehicle-problems.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { UserProfileComponent } from './page/user-profile/user-profile.component';
import { UserCarCardComponent } from './page/user-profile/user-car-card/user-car-card.component';
import { UserCarRegisterComponent } from './page/user-profile/user-car-register/user-car-register.component';
import { UserCarDetailsComponent } from './page/user-profile/user-car-card/user-car-details/user-car-details.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { UserCarMaintenanceComponent } from './page/user-profile/user-car-maintenance/user-car-maintenance.component';
import { UserCarMaintenanceScheduleComponent } from './page/user-profile/user-car-maintenance/user-car-maintenance-schedule/user-car-maintenance-schedule.component';
import { UserComponent } from './page/user/user.component';
import { PmComponent } from './page/pm/pm.component';
import { AdminComponent } from './page/admin/admin.component';
import {httpInterceptorProviders} from "./page/auth/auth-interceptor";
import {AdminCarRegisterComponent} from "./page/admin/admin-car-register/admin-car-register.component";
import { AdminCarViewComponent } from './page/admin/admin-car-view/admin-car-view.component';
import { AdminCarViewDetailsComponent } from './page/admin/admin-car-view/admin-car-view-details/admin-car-view-details.component';
import { UserCarUpdateComponent } from './page/user-profile/user-car-update/user-car-update.component';
import { UserCarUpdateFormComponent } from './page/user-profile/user-car-update/user-car-update-form/user-car-update-form.component';
import { UserCarDeleteComponent } from './page/user-profile/user-car-delete/user-car-delete.component';
import {ConfirmationDialogComponent} from "./page/confirmation-dialog/confirmation-dialog.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmationDialogService} from "./page/confirmation-dialog/confirmation-dialog.service";
import { AdminCarUpdateComponent } from './page/admin/admin-car-update/admin-car-update.component';
import { AdminCarDeleteComponent } from './page/admin/admin-car-delete/admin-car-delete.component';
import { StayInTouchComponent } from './page/home/stay-in-touch/stay-in-touch.component';
import { AdminCarUpdateFormComponent } from './page/admin/admin-car-update/admin-car-update-form/admin-car-update-form.component';
import { VehicleMaintenanceComponent } from './page/vehicle-maintenance/vehicle-maintenance.component';
import { VehicleNewsComponent } from './page/home/vehicle-news/vehicle-news.component';
import { LatestCarsComponent } from './page/home/latest-cars/latest-cars.component';
import { VehicleNewsAddComponent } from './page/admin/vehicle-news-add/vehicle-news-add.component';
import { VehicleNewsViewDeleteComponent } from './page/admin/vehicle-news-view-delete/vehicle-news-view-delete.component';
import { GeneralUserMessagesComponent } from './page/admin/general-user-messages/general-user-messages.component';
import {RatingModule} from "ng-starrating";
import { AdminUserCommentsComponent } from './page/admin/admin-user-comments/admin-user-comments.component';
import { AgmCoreModule } from '@agm/core';
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import { ServiceStationsComponent } from './page/admin/service-stations/service-stations.component';
import { ServiceAppointmentsComponent } from './page/admin/service-appointments/service-appointments.component';
import { CarRecommenderComponent } from './page/car-recommender/car-recommender.component';
import { CarRecommenderBodyTypeComponent } from './page/car-recommender/car-recommender-body-type/car-recommender-body-type.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    NavBarComponent,
    HomeComponent,
    CarCardComponent,
    CarouselComponent,
    CarDetailComponent,
    VehicleDetailsComponent,
    VehicleCompareComponent,
    VehicleProblemsComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UserCarCardComponent,
    UserCarRegisterComponent,
    UserCarDetailsComponent,
    UserCarMaintenanceComponent,
    UserCarMaintenanceScheduleComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    AdminCarRegisterComponent,
    AdminCarViewComponent,
    AdminCarViewDetailsComponent,
    UserCarUpdateComponent,
    UserCarUpdateFormComponent,
    UserCarDeleteComponent,
    ConfirmationDialogComponent,
    AdminCarUpdateComponent,
    AdminCarDeleteComponent,
    StayInTouchComponent,
    AdminCarUpdateFormComponent,
    VehicleMaintenanceComponent,
    VehicleNewsComponent,
    LatestCarsComponent,
    VehicleNewsAddComponent,
    VehicleNewsViewDeleteComponent,
    GeneralUserMessagesComponent,
    AdminUserCommentsComponent,
    ServiceStationsComponent,
    ServiceAppointmentsComponent,
    CarRecommenderComponent,
    CarRecommenderBodyTypeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-full-width',
      // positionClass:'toast-top-center',
      closeButton: true,
      timeOut: 3000,
      progressBar: true,

    }),
    NgbModule,
    RatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEPBwOA7mV7H3NALpAHoG_wOduw2us3Ww'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
  ],
  providers: [httpInterceptorProviders, ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
  // exports: [ConfirmationDialogComponent]
})
export class AppModule { }
