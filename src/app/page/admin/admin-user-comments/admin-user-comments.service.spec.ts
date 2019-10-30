import { TestBed } from '@angular/core/testing';

import { AdminUserCommentsService } from './admin-user-comments.service';

describe('AdminUserCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminUserCommentsService = TestBed.get(AdminUserCommentsService);
    expect(service).toBeTruthy();
  });
});
