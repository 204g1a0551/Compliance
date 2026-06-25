import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeFinanceDetailsDialog } from './trade-finance-details-dialog';

describe('TradeFinanceDetailsDialog', () => {
  let component: TradeFinanceDetailsDialog;
  let fixture: ComponentFixture<TradeFinanceDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeFinanceDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeFinanceDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
