import { TestBed } from '@angular/core/testing';

import { ServiceStationsService } from './service-stations.service';

describe('ServiceStationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceStationsService = TestBed.get(ServiceStationsService);
    expect(service).toBeTruthy();
  });
});
