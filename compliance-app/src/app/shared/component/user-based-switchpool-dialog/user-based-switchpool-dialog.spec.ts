import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasedSwitchpoolDialog } from './user-based-switchpool-dialog';

describe('UserBasedSwitchpoolDialog', () => {
  let component: UserBasedSwitchpoolDialog;
  let fixture: ComponentFixture<UserBasedSwitchpoolDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBasedSwitchpoolDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(UserBasedSwitchpoolDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
