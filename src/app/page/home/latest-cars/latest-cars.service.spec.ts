import { TestBed } from '@angular/core/testing';

import { LatestCarsService } from './latest-cars.service';

describe('LatestCarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LatestCarsService = TestBed.get(LatestCarsService);
    expect(service).toBeTruthy();
  });
});
