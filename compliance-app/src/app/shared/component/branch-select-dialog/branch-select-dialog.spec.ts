import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchSelectDialog } from './branch-select-dialog';

describe('BranchSelectDialog', () => {
  let component: BranchSelectDialog;
  let fixture: ComponentFixture<BranchSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
