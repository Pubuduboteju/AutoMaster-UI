import { TestBed } from '@angular/core/testing';

import { UserCarDeleteService } from './user-car-delete.service';

describe('UserCarDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarDeleteService = TestBed.get(UserCarDeleteService);
    expect(service).toBeTruthy();
  });
});
