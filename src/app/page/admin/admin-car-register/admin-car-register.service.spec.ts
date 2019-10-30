import { TestBed } from '@angular/core/testing';

import { AdminCarRegisterService } from './admin-car-register.service';

describe('AdminCarRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminCarRegisterService = TestBed.get(AdminCarRegisterService);
    expect(service).toBeTruthy();
  });
});
