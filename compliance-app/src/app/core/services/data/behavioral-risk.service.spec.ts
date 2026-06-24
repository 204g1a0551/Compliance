import { TestBed } from '@angular/core/testing';

import { BehavioralRiskService } from './behavioral-risk.service';

describe('BehavioralRiskService', () => {
  let service: BehavioralRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavioralRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
