import { TestBed } from '@angular/core/testing';

import { KycDetailsService } from './kyc-details.service';

describe('KycDetailsService', () => {
  let service: KycDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KycDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
