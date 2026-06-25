import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmDetailsDialog } from './bm-details-dialog';

describe('BmDetailsDialog', () => {
  let component: BmDetailsDialog;
  let fixture: ComponentFixture<BmDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BmDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
