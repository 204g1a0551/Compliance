import { TestBed } from '@angular/core/testing';

import { WatchlistScanService } from './watchlist-scan.service';

describe('WatchlistScanService', () => {
  let service: WatchlistScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchlistScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
