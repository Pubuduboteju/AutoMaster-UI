import { TestBed } from '@angular/core/testing';

import { UserCarRegisterService } from './user-car-register.service';

describe('UserCarRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarRegisterService = TestBed.get(UserCarRegisterService);
    expect(service).toBeTruthy();
  });
});
