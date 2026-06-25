import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnDetailsDialog } from './txn-details-dialog';

describe('TxnDetailsDialog', () => {
  let component: TxnDetailsDialog;
  let fixture: ComponentFixture<TxnDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TxnDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(TxnDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
