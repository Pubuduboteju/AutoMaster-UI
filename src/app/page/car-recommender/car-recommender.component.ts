import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarRecommenderService} from "./car-recommender.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FinalCarRecoResults, RecommendationBodyTypeInputs, RecommendationInputs} from "../../models";

@Component({
  selector: 'app-car-recommender',
  templateUrl: './car-recommender.component.html',
  styleUrls: ['./car-recommender.component.css']
})
export class CarRecommenderComponent implements OnInit {

  public bodyTypeResults: RecommendationBodyTypeInputs;
  public finalCarRecoResults: FinalCarRecoResults[] = [];
  createVehicleRecoForm: FormGroup;
  createVehicleRecoBodyTypeForm: FormGroup;
  private recommendationInputs: RecommendationInputs[] = [];
  private recommendationBodyTypeInputs: RecommendationBodyTypeInputs[] = [];

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

    this.createVehicleRecoBodyTypeForm = this.formBuilder.group(
      {
        'sedan': [null, Validators.compose([Validators.required])],
        'saloon': [null, Validators.compose([Validators.required])],
        'hatchback': [null, Validators.compose([Validators.required])],
        'suv': [null, Validators.compose([Validators.required])],
        'coupe': [null, Validators.compose([Validators.required])],
      });
  }

  onGetRecommendation(value: any) {
    console.log(value);
    this.carRecommenderService.create(value)
      .subscribe(
        res => {
          this.finalCarRecoResults = res.content;
          console.log(res);
          console.log(this.finalCarRecoResults);
        }, error => {
          console.log(error);
        }
      );
  }

  getCarRecommendation(value: any) {
    this.carRecommenderService.getCarRecommendation(value)
      .subscribe(res => {
        this.bodyTypeResults=res;
        console.log(res);
      })

  }

}
