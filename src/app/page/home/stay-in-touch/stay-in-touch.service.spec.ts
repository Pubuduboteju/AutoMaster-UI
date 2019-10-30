import { TestBed } from '@angular/core/testing';

import { StayInTouchService } from './stay-in-touch.service';

describe('StayInTouchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StayInTouchService = TestBed.get(StayInTouchService);
    expect(service).toBeTruthy();
  });
});
