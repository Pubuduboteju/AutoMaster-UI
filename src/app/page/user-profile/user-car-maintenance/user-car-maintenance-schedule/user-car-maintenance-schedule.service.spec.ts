import { TestBed } from '@angular/core/testing';

import { UserCarMaintenanceScheduleService } from './user-car-maintenance-schedule.service';

describe('UserCarMaintenanceScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarMaintenanceScheduleService = TestBed.get(UserCarMaintenanceScheduleService);
    expect(service).toBeTruthy();
  });
});
