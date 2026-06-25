import { TestBed } from '@angular/core/testing';

import { HotlistWatchlistAuditService } from './hotlist-watchlist-audit.service';

describe('HotlistWatchlistAuditService', () => {
  let service: HotlistWatchlistAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotlistWatchlistAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
