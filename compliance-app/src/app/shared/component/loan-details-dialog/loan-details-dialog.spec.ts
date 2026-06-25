import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsDialog } from './loan-details-dialog';

describe('LoanDetailsDialog', () => {
  let component: LoanDetailsDialog;
  let fixture: ComponentFixture<LoanDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
