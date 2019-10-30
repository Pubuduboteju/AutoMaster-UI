import { TestBed } from '@angular/core/testing';

import { AdminCarDeleteService } from './admin-car-delete.service';

describe('AdminCarDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCarDeleteService = TestBed.get(AdminCarDeleteService);
    expect(service).toBeTruthy();
  });
});
