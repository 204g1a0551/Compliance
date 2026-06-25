import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmRuleListDialog } from './bm-rule-list-dialog';

describe('BmRuleListDialog', () => {
  let component: BmRuleListDialog;
  let fixture: ComponentFixture<BmRuleListDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmRuleListDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BmRuleListDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
