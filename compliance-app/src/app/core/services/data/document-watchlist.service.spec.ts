import { TestBed } from '@angular/core/testing';

import { DocumentWatchlistService } from './document-watchlist.service';

describe('DocumentWatchlistService', () => {
  let service: DocumentWatchlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentWatchlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
