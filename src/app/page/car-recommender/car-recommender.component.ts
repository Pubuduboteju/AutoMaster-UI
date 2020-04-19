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
  public beforeFinalCarRecoResults: FinalCarRecoResults[] = [];
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
          // this.finalCarRecoResults = res.content;
          var i:number = 0;
          res.content.forEach(function (data) {
            res.content[i].drivingPerformance = 6- data.drivingPerformance;
            res.content[i].safety = 6 - data.safety;
            res.content[i].comfortRide = 6 - data.comfortRide;
            res.content[i].luxuryLook = 6 - data.luxuryLook;
            res.content[i].sportyDesign = 6 - data.sportyDesign;
            res.content[i].prestige = 6 - data.prestige;
            i++;

          });
          this.beforeFinalCarRecoResults = res.content;

          console.log(res);
          console.log(this.beforeFinalCarRecoResults);
        }, error => {
          console.log(error);
        }
      );
  }

  getCarRecommendation(value: any) {
    this.carRecommenderService.getCarRecommendation(value)
      .subscribe(
        res => {
        this.bodyTypeResults=res;
        var i:number = 1;
        let tempFinalCarRecoResults = [];
        tempFinalCarRecoResults = this.beforeFinalCarRecoResults;
        this.bodyTypeResults.forEach(function (data) {
          if(i==1){
            var j:number = 0;
            tempFinalCarRecoResults.forEach( function (data1) {
              if(data1.bodyType=="sedan"){
                if(data=="Positive"){
                  tempFinalCarRecoResults[j].carValue = data1.carValue + data1.carValue;
                }if(data=="Negative") {
                  // tempFinalCarRecoResults[j].carValue = data1.carValue - 0.6;
                }
              }
              j++;
            });
          }
          if(i==2){
            var j:number = 0;
            tempFinalCarRecoResults.forEach( function (data1) {
              if(data1.bodyType=="saloon"){
                if(data=="Positive"){
                  tempFinalCarRecoResults[j].carValue = data1.carValue + data1.carValue;
                }if(data=="Negative") {
                  // tempFinalCarRecoResults[i - 1].carValue = data1.carValue -0.6;
                }
              }
              j++;
            });
          }
          if(i==3){
            var j:number = 0;
            tempFinalCarRecoResults.forEach( function (data1) {
              if(data1.bodyType=="hatchback"){
                if(data=="Positive"){
                  tempFinalCarRecoResults[j].carValue = data1.carValue + data1.carValue;
                }if(data=="Negative") {
                  // tempFinalCarRecoResults[i-1].carValue = parseFloat(data1.carValue) - parseFloat(0.6);
                }
              }
              j++;
            });
          }
          if(i==4){
            var j:number = 0;
            tempFinalCarRecoResults.forEach( function (data1) {
              if(data1.bodyType=="suv"){
                if(data=="Positive"){
                  tempFinalCarRecoResults[j].carValue = data1.carValue + data1.carValue;
                }if(data=="Negative") {
                  // tempFinalCarRecoResults[i-1].carValue = data1.carValue - 0.6;
                }
              }
              j++;
            });
          }
          if(i==5){
            var j:number = 0;
            tempFinalCarRecoResults.forEach( function (data1) {
              if(data1.bodyType=="coupe"){
                if(data=="Positive"){
                  tempFinalCarRecoResults[j].carValue = data1.carValue + data1.carValue;
                }if(data=="Negative") {
                  // tempFinalCarRecoResults[i-1].carValue = parseFloat(data1.carValue) - parseFloat(0.6);
                }
              }
              j++;
            });
          }
          i++;
        });
        this.finalCarRecoResults = tempFinalCarRecoResults;
        this.finalCarRecoResults.sort((a,b) => b.carValue - a.carValue);
        console.log(this.finalCarRecoResults);
      }, error => {
          console.log(error);
        }
      );

  }

}
