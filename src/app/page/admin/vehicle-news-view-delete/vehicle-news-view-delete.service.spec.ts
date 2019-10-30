import { TestBed } from '@angular/core/testing';

import { VehicleNewsViewDeleteService } from './vehicle-news-view-delete.service';

describe('VehicleNewsViewDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleNewsViewDeleteService = TestBed.get(VehicleNewsViewDeleteService);
    expect(service).toBeTruthy();
  });
});
