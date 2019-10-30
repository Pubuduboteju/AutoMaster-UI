import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import {Observable} from "rxjs/index";
import {UserCars} from "../../../models";
import {environment} from "../../../../environments/environment";
import {NavigationEnd, Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserCarCardService {

  private previousUrl: string = undefined;
  private currentUrl: string = undefined;

  constructor(private _httpClient: HttpClient, private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });

  }
  public getPreviousUrl() {
    return this.previousUrl;
  }

  getAllUserCars(): Observable<UserCars[]> {

    const URL = environment.host + '/userCars/getAllUserCars';
    return this._httpClient.get<UserCars[]>(URL)
      .pipe(
        map(value => value['content']),
      );
  }
}
