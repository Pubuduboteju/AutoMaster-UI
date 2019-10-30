import { TestBed } from '@angular/core/testing';

import { AdminCarViewService } from './admin-car-view.service';

describe('AdminCarViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCarViewService = TestBed.get(AdminCarViewService);
    expect(service).toBeTruthy();
  });
});
