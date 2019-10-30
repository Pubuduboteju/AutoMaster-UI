import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleProblemsComponent } from './vehicle-problems.component';

describe('VehicleProblemsComponent', () => {
  let component: VehicleProblemsComponent;
  let fixture: ComponentFixture<VehicleProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
