import { TestBed } from '@angular/core/testing';

import { ExceptionalRiskService } from './exceptional-risk.service';

describe('ExceptionalRiskService', () => {
  let service: ExceptionalRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionalRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
