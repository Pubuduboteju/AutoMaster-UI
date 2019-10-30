import { TestBed } from '@angular/core/testing';

import { AdminCarUpdateService } from './admin-car-update.service';

describe('AdminCarUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCarUpdateService = TestBed.get(AdminCarUpdateService);
    expect(service).toBeTruthy();
  });
});
