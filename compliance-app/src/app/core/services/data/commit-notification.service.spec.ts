import { TestBed } from '@angular/core/testing';

import { CommitNotificationService } from './commit-notification.service';

describe('CommitNotificationService', () => {
  let service: CommitNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
