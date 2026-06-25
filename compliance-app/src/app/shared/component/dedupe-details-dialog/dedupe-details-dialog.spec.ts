import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedupeDetailsDialog } from './dedupe-details-dialog';

describe('DedupeDetailsDialog', () => {
  let component: DedupeDetailsDialog;
  let fixture: ComponentFixture<DedupeDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedupeDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(DedupeDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
