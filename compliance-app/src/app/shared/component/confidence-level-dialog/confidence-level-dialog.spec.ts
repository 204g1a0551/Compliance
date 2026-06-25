import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidenceLevelDialog } from './confidence-level-dialog';

describe('ConfidenceLevelDialog', () => {
  let component: ConfidenceLevelDialog;
  let fixture: ComponentFixture<ConfidenceLevelDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfidenceLevelDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfidenceLevelDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
