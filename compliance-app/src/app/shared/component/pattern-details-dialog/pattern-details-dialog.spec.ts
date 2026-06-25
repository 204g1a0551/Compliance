import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternDetailsDialog } from './pattern-details-dialog';

describe('PatternDetailsDialog', () => {
  let component: PatternDetailsDialog;
  let fixture: ComponentFixture<PatternDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(PatternDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
