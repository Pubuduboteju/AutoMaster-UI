import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestCarsComponent } from './latest-cars.component';

describe('LatestCarsComponent', () => {
  let component: LatestCarsComponent;
  let fixture: ComponentFixture<LatestCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
