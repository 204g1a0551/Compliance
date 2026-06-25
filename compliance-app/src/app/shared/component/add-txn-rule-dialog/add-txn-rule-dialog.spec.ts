import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTxnRuleDialog } from './add-txn-rule-dialog';

describe('AddTxnRuleDialog', () => {
  let component: AddTxnRuleDialog;
  let fixture: ComponentFixture<AddTxnRuleDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTxnRuleDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTxnRuleDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
