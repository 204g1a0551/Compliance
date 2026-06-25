import { TestBed } from '@angular/core/testing';

import { ExceptionalKycService } from './exceptional-kyc.service';

describe('ExceptionalKycService', () => {
  let service: ExceptionalKycService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionalKycService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
