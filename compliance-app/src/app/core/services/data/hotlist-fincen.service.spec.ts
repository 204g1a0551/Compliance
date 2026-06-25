import { TestBed } from '@angular/core/testing';

import { HotlistFincenService } from './hotlist-fincen.service';

describe('HotlistFincenService', () => {
  let service: HotlistFincenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotlistFincenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
