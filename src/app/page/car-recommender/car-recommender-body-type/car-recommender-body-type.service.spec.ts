import { TestBed } from '@angular/core/testing';

import { CarRecommenderBodyTypeService } from './car-recommender-body-type.service';

describe('CarRecommenderBodyTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarRecommenderBodyTypeService = TestBed.get(CarRecommenderBodyTypeService);
    expect(service).toBeTruthy();
  });
});
