import { TestBed } from '@angular/core/testing';

import { VehicleProblemsService } from './vehicle-problems.service';

describe('VehicleProblemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleProblemsService = TestBed.get(VehicleProblemsService);
    expect(service).toBeTruthy();
  });
});
