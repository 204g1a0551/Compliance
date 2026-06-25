import { TestBed } from '@angular/core/testing';

import { HotlistIwlService } from './hotlist-iwl.service';

describe('HotlistIwlService', () => {
  let service: HotlistIwlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotlistIwlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
