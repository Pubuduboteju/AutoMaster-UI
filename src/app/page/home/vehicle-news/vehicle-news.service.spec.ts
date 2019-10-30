import { TestBed } from '@angular/core/testing';

import { VehicleNewsService } from './vehicle-news.service';

describe('VehicleNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleNewsService = TestBed.get(VehicleNewsService);
    expect(service).toBeTruthy();
  });
});
