import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDetailsDialog } from './rule-details-dialog';

describe('RuleDetailsDialog', () => {
  let component: RuleDetailsDialog;
  let fixture: ComponentFixture<RuleDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuleDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(RuleDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
