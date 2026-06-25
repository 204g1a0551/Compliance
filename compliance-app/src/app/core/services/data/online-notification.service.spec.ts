import { TestBed } from '@angular/core/testing';

import { OnlineNotificationService } from './online-notification.service';

describe('OnlineNotificationService', () => {
  let service: OnlineNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
