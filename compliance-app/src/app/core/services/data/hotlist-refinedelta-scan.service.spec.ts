import { TestBed } from '@angular/core/testing';

import { HotlistRefinedeltaScanService } from './hotlist-refinedelta-scan.service';

describe('HotlistRefinedeltaScanService', () => {
  let service: HotlistRefinedeltaScanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotlistRefinedeltaScanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
