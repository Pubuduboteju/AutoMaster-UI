import { TestBed } from '@angular/core/testing';

import { AdminCarViewDetailsService } from './admin-car-view-details.service';

describe('AdminCarViewDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCarViewDetailsService = TestBed.get(AdminCarViewDetailsService);
    expect(service).toBeTruthy();
  });
});
