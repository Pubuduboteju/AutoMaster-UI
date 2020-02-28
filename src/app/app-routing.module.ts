import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from './page/page.component';
import {HomeComponent} from './page/home/home.component';
import {CarDetailComponent} from "./page/car-detail/car-detail.component";
import {VehicleDetailsComponent} from "./page/vehicle-details/vehicle-details.component";
import {VehicleCompareComponent} from "./page/vehicle-compare/vehicle-compare.component";
import {LoginComponent} from "./page/login/login.component";
import {RegisterComponent} from "./page/register/register.component";
import {VehicleProblemsComponent} from "./page/vehicle-problems/vehicle-problems.component";
import {UserProfileComponent} from "./page/user-profile/user-profile.component";
import {UserCarDetailsComponent} from "./page/user-profile/user-car-card/user-car-details/user-car-details.component";
import {UserCarRegisterComponent} from "./page/user-profile/user-car-register/user-car-register.component";
import {UserCarCardComponent} from "./page/user-profile/user-car-card/user-car-card.component";
import {UserCarMaintenanceComponent} from "./page/user-profile/user-car-maintenance/user-car-maintenance.component";
import {UserCarMaintenanceScheduleComponent} from "./page/user-profile/user-car-maintenance/user-car-maintenance-schedule/user-car-maintenance-schedule.component";
import {UserComponent} from "./page/user/user.component";
import {PmComponent} from "./page/pm/pm.component";
import {AdminComponent} from "./page/admin/admin.component";
import {AdminCarRegisterComponent} from "./page/admin/admin-car-register/admin-car-register.component";
import {AdminCarViewComponent} from "./page/admin/admin-car-view/admin-car-view.component";
import {AdminCarViewDetailsComponent} from "./page/admin/admin-car-view/admin-car-view-details/admin-car-view-details.component";
import {UserCarUpdateComponent} from "./page/user-profile/user-car-update/user-car-update.component";
import {UserCarUpdateFormComponent} from "./page/user-profile/user-car-update/user-car-update-form/user-car-update-form.component";
import {UserCarDeleteComponent} from "./page/user-profile/user-car-delete/user-car-delete.component";
import {AdminCarDeleteComponent} from "./page/admin/admin-car-delete/admin-car-delete.component";
import {AdminCarUpdateComponent} from "./page/admin/admin-car-update/admin-car-update.component";
import {AdminCarUpdateFormComponent} from "./page/admin/admin-car-update/admin-car-update-form/admin-car-update-form.component";
import {VehicleMaintenanceComponent} from "./page/vehicle-maintenance/vehicle-maintenance.component";
import {VehicleNewsAddComponent} from "./page/admin/vehicle-news-add/vehicle-news-add.component";
import {VehicleNewsViewDeleteComponent} from "./page/admin/vehicle-news-view-delete/vehicle-news-view-delete.component";
import {GeneralUserMessagesComponent} from "./page/admin/general-user-messages/general-user-messages.component";
import {AdminUserCommentsComponent} from "./page/admin/admin-user-comments/admin-user-comments.component";
import {ServiceStationsComponent} from "./page/admin/service-stations/service-stations.component";
import {ServiceAppointmentsComponent} from "./page/admin/service-appointments/service-appointments.component";
import {CarRecommenderComponent} from "./page/car-recommender/car-recommender.component";
import {CarRecommenderBodyTypeComponent} from "./page/car-recommender/car-recommender-body-type/car-recommender-body-type.component";


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {path: '', component: HomeComponent},
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'car',
        component: CarDetailComponent
      },
      {
        path: 'vehicle-details',
        component: VehicleDetailsComponent
      },
      {
        path: 'vehicle-compare',
        component: VehicleCompareComponent
      },
      // {
      //   path: 'login',
      //   component: LoginComponent
      // },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'vehicle-problems',
        component: VehicleProblemsComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
        children:[
          { path: 'user-car-details', component:UserCarDetailsComponent },
          { path: 'user-car-register', component:UserCarRegisterComponent},
          { path: 'user-car-card', component:UserCarCardComponent,children:[{path:'user-car-details', component:UserCarDetailsComponent }]},
          { path: 'user-car-maintenance', component:UserCarMaintenanceComponent,children:[{path:'user-car-maintenance-schedule', component:UserCarMaintenanceScheduleComponent}]},
          { path: 'user-car-update', component:UserCarUpdateComponent, children:[{path:'user-car-update-form', component:UserCarUpdateFormComponent}]},
          { path: 'user-car-delete', component:UserCarDeleteComponent}
        ]
      },
      {
        path: 'user-car',
        component: UserCarDetailsComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'pm',
        component: PmComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        children:[
          { path: 'admin-car-register', component:AdminCarRegisterComponent},
          { path: 'admin-car-view',  component:AdminCarViewComponent,children:[{ path: 'admin-car-view-details', component:AdminCarViewDetailsComponent}]},
          { path: 'admin-car-update', component:AdminCarUpdateComponent, children: [{ path: 'admin-car-update-form', component: AdminCarUpdateFormComponent}]},
          { path: 'admin-car-delete', component:AdminCarDeleteComponent},
          { path: 'vehicle-news-add', component:VehicleNewsAddComponent},
          { path: 'vehicle-news-view-delete', component:VehicleNewsViewDeleteComponent},
          { path: 'general-user-messages', component:GeneralUserMessagesComponent},
          { path: 'admin-user-comments', component:AdminUserCommentsComponent},
          { path: 'service-stations', component:ServiceStationsComponent},
          { path: 'service-appointments', component: ServiceAppointmentsComponent}
        ]
      },
      {
        path: 'auth/login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: RegisterComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'vehicle-maintenance',
        component: VehicleMaintenanceComponent
      },
      {
        path: 'car-recommender',
        component: CarRecommenderComponent,
        children:[
          {path: 'car-recommender-body-type', component:CarRecommenderBodyTypeComponent}
        ]
      }
      // {
      //   path: 'user-car-card',component:UserCarCardComponent,
      //   children:[{
      //     path:'user-car-details', component:UserCarDetailsComponent
      //   }]
      // }
    ]
  },
  {path: '**', redirectTo: ''}
];


@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
          })
export class AppRoutingModule {

}
