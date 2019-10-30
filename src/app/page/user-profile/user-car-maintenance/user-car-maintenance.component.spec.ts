import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarMaintenanceComponent } from './user-car-maintenance.component';

describe('UserCarMaintenanceComponent', () => {
  let component: UserCarMaintenanceComponent;
  let fixture: ComponentFixture<UserCarMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
