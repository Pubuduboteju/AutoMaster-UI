import { TestBed } from '@angular/core/testing';

import { AdminCarUpdateFormService } from './admin-car-update-form.service';

describe('AdminCarUpdateFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCarUpdateFormService = TestBed.get(AdminCarUpdateFormService);
    expect(service).toBeTruthy();
  });
});
