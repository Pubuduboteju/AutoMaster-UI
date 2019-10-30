import { TestBed } from '@angular/core/testing';

import { UserCarMaintenanceService } from './user-car-maintenance.service';

describe('UserCarMaintenanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarMaintenanceService = TestBed.get(UserCarMaintenanceService);
    expect(service).toBeTruthy();
  });
});
