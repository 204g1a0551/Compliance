import { TestBed } from '@angular/core/testing';

import { HotlistOfacService } from './hotlist-ofac.service';

describe('HotlistOfacService', () => {
  let service: HotlistOfacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotlistOfacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
