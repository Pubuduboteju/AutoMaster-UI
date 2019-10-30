import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCompareComponent } from './vehicle-compare.component';

describe('VehicleCompareComponent', () => {
  let component: VehicleCompareComponent;
  let fixture: ComponentFixture<VehicleCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
