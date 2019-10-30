import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNewsViewDeleteComponent } from './vehicle-news-view-delete.component';

describe('VehicleNewsViewDeleteComponent', () => {
  let component: VehicleNewsViewDeleteComponent;
  let fixture: ComponentFixture<VehicleNewsViewDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleNewsViewDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNewsViewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
