import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectWorkflowDialog } from './user-select-workflow-dialog';

describe('UserSelectWorkflowDialog', () => {
  let component: UserSelectWorkflowDialog;
  let fixture: ComponentFixture<UserSelectWorkflowDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSelectWorkflowDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSelectWorkflowDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
