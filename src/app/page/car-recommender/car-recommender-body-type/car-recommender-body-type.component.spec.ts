import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRecommenderBodyTypeComponent } from './car-recommender-body-type.component';

describe('CarRecommenderBodyTypeComponent', () => {
  let component: CarRecommenderBodyTypeComponent;
  let fixture: ComponentFixture<CarRecommenderBodyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRecommenderBodyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRecommenderBodyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
