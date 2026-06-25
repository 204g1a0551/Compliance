import { TestBed } from '@angular/core/testing';

import { TransactionRulesService } from './transaction-rules.service';

describe('TransactionRulesService', () => {
  let service: TransactionRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
