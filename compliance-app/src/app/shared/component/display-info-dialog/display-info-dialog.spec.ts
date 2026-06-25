import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfoDialog } from './display-info-dialog';

describe('DisplayInfoDialog', () => {
  let component: DisplayInfoDialog;
  let fixture: ComponentFixture<DisplayInfoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayInfoDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayInfoDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
