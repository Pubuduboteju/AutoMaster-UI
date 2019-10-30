import { TestBed } from '@angular/core/testing';

import { VehicleMaintenanceService } from './vehicle-maintenance.service';

describe('VehicleMaintenanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleMaintenanceService = TestBed.get(VehicleMaintenanceService);
    expect(service).toBeTruthy();
  });
});
