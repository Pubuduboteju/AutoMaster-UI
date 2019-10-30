import { TestBed } from '@angular/core/testing';

import { VehicleCompareService } from './vehicle-compare.service';

describe('VehicleCompareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleCompareService = TestBed.get(VehicleCompareService);
    expect(service).toBeTruthy();
  });
});
