import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmaPaymentInfo } from './pma-payment-info';

describe('PmaPaymentInfo', () => {
  let component: PmaPaymentInfo;
  let fixture: ComponentFixture<PmaPaymentInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmaPaymentInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(PmaPaymentInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
