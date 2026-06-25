import { TestBed } from '@angular/core/testing';

import { FplistService } from './fplist.service';

describe('FplistService', () => {
  let service: FplistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FplistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
