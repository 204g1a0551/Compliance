import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMaskingDetailsDialog } from './data-masking-details-dialog';

describe('DataMaskingDetailsDialog', () => {
  let component: DataMaskingDetailsDialog;
  let fixture: ComponentFixture<DataMaskingDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataMaskingDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(DataMaskingDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
