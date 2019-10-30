import { TestBed } from '@angular/core/testing';

import { UserCarCardService } from './user-car-card.service';

describe('UserCarCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCarCardService = TestBed.get(UserCarCardService);
    expect(service).toBeTruthy();
  });
});
