import { TestBed } from '@angular/core/testing';

import { StagingTransactionService } from './staging-transaction.service';

describe('StagingTransactionService', () => {
  let service: StagingTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagingTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
