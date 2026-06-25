import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesListDialog } from './rules-list-dialog';

describe('RulesListDialog', () => {
  let component: RulesListDialog;
  let fixture: ComponentFixture<RulesListDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RulesListDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(RulesListDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
