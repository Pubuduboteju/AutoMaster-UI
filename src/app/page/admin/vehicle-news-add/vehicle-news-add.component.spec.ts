import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNewsAddComponent } from './vehicle-news-add.component';

describe('VehicleNewsAddComponent', () => {
  let component: VehicleNewsAddComponent;
  let fixture: ComponentFixture<VehicleNewsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleNewsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNewsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
