import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRecommenderComponent } from './car-recommender.component';

describe('CarRecommenderComponent', () => {
  let component: CarRecommenderComponent;
  let fixture: ComponentFixture<CarRecommenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRecommenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRecommenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
