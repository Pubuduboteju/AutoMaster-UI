import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNewsComponent } from './vehicle-news.component';

describe('VehicleNewsComponent', () => {
  let component: VehicleNewsComponent;
  let fixture: ComponentFixture<VehicleNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
