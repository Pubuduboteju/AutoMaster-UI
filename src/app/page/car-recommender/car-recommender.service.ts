import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {RecommendationInputs} from "../../models";
import {environment} from "../../../environments/environment";

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
}
