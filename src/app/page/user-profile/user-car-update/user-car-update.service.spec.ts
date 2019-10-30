import { TestBed } from '@angular/core/testing';

import { UserCarUpdateService } from './user-car-update.service';

describe('UserCarUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarUpdateService = TestBed.get(UserCarUpdateService);
    expect(service).toBeTruthy();
  });
});
