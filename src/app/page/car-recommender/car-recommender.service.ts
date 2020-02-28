import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {RecommendationBodyTypeInputs, RecommendationInputs} from "../../models";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarRecommenderService {

  constructor(private _httpClient: HttpClient) {

  }

  create(value: any): Observable<any> {
    const URL = environment.host + '/carRecommender/sendInputsForRecom';
    return this._httpClient.post<RecommendationInputs>(URL, value, {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json'
        }),
    });
  }


  getCarRecommendation(value:any): Observable<RecommendationBodyTypeInputs> {

    const URL = environment.host + '/carRecommender/bodyType?sedan='+value.sedan+'&saloon='+value.saloon+'&hatchback='+value.hatchback+'&suv='+value.suv+'&coupe='+value.coupe;
    return this._httpClient.get<RecommendationBodyTypeInputs[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
