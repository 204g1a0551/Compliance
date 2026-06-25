import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuSelectionDialog } from './bu-selection-dialog';

describe('BuSelectionDialog', () => {
  let component: BuSelectionDialog;
  let fixture: ComponentFixture<BuSelectionDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuSelectionDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BuSelectionDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
