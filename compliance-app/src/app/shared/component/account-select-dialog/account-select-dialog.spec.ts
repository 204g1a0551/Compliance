import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSelectDialog } from './account-select-dialog';

describe('AccountSelectDialog', () => {
  let component: AccountSelectDialog;
  let fixture: ComponentFixture<AccountSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
