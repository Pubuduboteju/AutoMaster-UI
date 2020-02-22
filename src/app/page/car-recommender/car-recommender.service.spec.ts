import { TestBed } from '@angular/core/testing';

import { CarRecommenderService } from './car-recommender.service';

describe('CarRecommenderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarRecommenderService = TestBed.get(CarRecommenderService);
    expect(service).toBeTruthy();
  });
});
