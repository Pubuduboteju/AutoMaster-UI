import { TestBed } from '@angular/core/testing';

import { GeneralUserMessagesService } from './general-user-messages.service';

describe('GeneralUserMessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralUserMessagesService = TestBed.get(GeneralUserMessagesService);
    expect(service).toBeTruthy();
  });
});
