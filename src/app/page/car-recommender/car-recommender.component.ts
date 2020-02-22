import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarRecommenderService} from "./car-recommender.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {RecommendationInputs} from "../../models";

@Component({
  selector: 'app-car-recommender',
  templateUrl: './car-recommender.component.html',
  styleUrls: ['./car-recommender.component.css']
})
export class CarRecommenderComponent implements OnInit {
  createVehicleRecoForm: FormGroup;
  private recommendationInputs: RecommendationInputs[] = [];

  constructor(private carRecommenderService: CarRecommenderService,  private formBuilder: FormBuilder,  private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.createVehicleRecoForm = this.formBuilder.group(
      {
        'gender': [null, Validators.compose([Validators.required])],
        'job': [null, Validators.compose([Validators.required])],
        'ageGroup': [null, Validators.compose([Validators.required])],
        'monthlyIncome': [null, Validators.compose([Validators.required])],
        'noOfFamMembers': [null, Validators.compose([Validators.required])],
        'brandedPerson': [null, Validators.compose([Validators.required])],
        'howLongUseVehicle': [null, Validators.compose([Validators.required])],
        'considerMoneySpendOnFuel': [null, Validators.compose([Validators.required])],
        'avgKmsPerDriveMonth': [null, Validators.compose([Validators.required])],
        'petrolhead': [null, Validators.compose([Validators.required])],
        'considerResaleValue': [null, Validators.compose([Validators.required])],
        'whyUseCar': [null, Validators.compose([Validators.required])],
      });
  }

  onGetRecommendation(value: any) {
    console.log(value);
    this.carRecommenderService.create(value)
      .subscribe(
        res => {
          console.log(res);
          // if(true){
          //   this.successmsg();
          // }else{
          //   this.errorsmsg();
          // }
          // this.router.navigateByUrl('admin/vehicle-news-view-delete');
        }, error => {
          console.log(error);
        }
      );
  }

}
