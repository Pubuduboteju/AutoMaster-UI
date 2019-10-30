import { TestBed } from '@angular/core/testing';

import { VehicleNewsAddService } from './vehicle-news-add.service';

describe('VehicleNewsAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleNewsAddService = TestBed.get(VehicleNewsAddService);
    expect(service).toBeTruthy();
  });
});
