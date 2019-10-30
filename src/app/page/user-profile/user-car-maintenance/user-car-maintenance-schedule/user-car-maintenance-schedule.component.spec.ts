import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarMaintenanceScheduleComponent } from './user-car-maintenance-schedule.component';

describe('UserCarMaintenanceScheduleComponent', () => {
  let component: UserCarMaintenanceScheduleComponent;
  let fixture: ComponentFixture<UserCarMaintenanceScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarMaintenanceScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarMaintenanceScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
