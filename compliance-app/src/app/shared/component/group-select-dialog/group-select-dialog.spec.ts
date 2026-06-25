import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSelectDialog } from './group-select-dialog';

describe('GroupSelectDialog', () => {
  let component: GroupSelectDialog;
  let fixture: ComponentFixture<GroupSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
