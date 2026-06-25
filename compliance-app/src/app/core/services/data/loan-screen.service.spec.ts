import { TestBed } from '@angular/core/testing';

import { LoanScreenService } from './loan-screen.service';

describe('LoanScreenService', () => {
  let service: LoanScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
