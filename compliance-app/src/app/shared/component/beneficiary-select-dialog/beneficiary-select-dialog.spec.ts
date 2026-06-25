import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarySelectDialog } from './beneficiary-select-dialog';

describe('BeneficiarySelectDialog', () => {
  let component: BeneficiarySelectDialog;
  let fixture: ComponentFixture<BeneficiarySelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficiarySelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BeneficiarySelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
