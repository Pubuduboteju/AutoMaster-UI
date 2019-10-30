import { TestBed } from '@angular/core/testing';

import { UserCarDetailsService } from './user-car-details.service';

describe('UserCarDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarDetailsService = TestBed.get(UserCarDetailsService);
    expect(service).toBeTruthy();
  });
});
