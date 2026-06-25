import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNewCaseDialog } from './make-new-case-dialog';

describe('MakeNewCaseDialog', () => {
  let component: MakeNewCaseDialog;
  let fixture: ComponentFixture<MakeNewCaseDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeNewCaseDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(MakeNewCaseDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
