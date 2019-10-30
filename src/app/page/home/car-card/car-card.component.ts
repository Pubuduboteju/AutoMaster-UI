import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../../models';
import {Router} from "@angular/router";


@Component({
             selector: 'app-car-card',
             templateUrl: './car-card.component.html',
             styleUrls: ['./car-card.component.css']
           })
export class CarCardComponent implements OnInit {

  @Input() public car: Car;


  constructor(private router: Router) {
  }


  ngOnInit() {
  }

  showDetails(id: string) {
    this.router.navigate(["car"], { queryParams: {id: id}});

  }
}
