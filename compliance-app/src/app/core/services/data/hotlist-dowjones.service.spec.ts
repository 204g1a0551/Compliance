import { TestBed } from '@angular/core/testing';

import { HotlistDowjonesService } from './hotlist-dowjones.service';

describe('HotlistDowjonesService', () => {
  let service: HotlistDowjonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotlistDowjonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
