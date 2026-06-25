import { TestBed } from '@angular/core/testing';

import { HotlistWorldcheckService } from './hotlist-worldcheck.service';

describe('HotlistWorldcheckService', () => {
  let service: HotlistWorldcheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotlistWorldcheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
