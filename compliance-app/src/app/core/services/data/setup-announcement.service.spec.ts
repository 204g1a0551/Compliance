import { TestBed } from '@angular/core/testing';

import { SetupAnnouncementService } from './setup-announcement.service';

describe('SetupAnnouncementService', () => {
  let service: SetupAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
