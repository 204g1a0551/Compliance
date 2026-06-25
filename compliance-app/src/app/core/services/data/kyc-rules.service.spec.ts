import { TestBed } from '@angular/core/testing';

import { KycRulesService } from './kyc-rules.service';

describe('KycRulesService', () => {
  let service: KycRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KycRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
