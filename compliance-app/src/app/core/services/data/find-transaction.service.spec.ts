import { TestBed } from '@angular/core/testing';

import { FindTransactionService } from './find-transaction.service';

describe('FindTransactionService', () => {
  let service: FindTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
