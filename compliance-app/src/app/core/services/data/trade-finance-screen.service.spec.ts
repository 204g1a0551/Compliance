import { TestBed } from '@angular/core/testing';

import { TradeFinanceScreenService } from './trade-finance-screen.service';

describe('TradeFinanceScreenService', () => {
  let service: TradeFinanceScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeFinanceScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
