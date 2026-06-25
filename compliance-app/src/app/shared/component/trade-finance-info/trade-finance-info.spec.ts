import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeFinanceInfo } from './trade-finance-info';

describe('TradeFinanceInfo', () => {
  let component: TradeFinanceInfo;
  let fixture: ComponentFixture<TradeFinanceInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeFinanceInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeFinanceInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
