import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDialogData } from './details-dialog-data';

describe('DetailsDialogData', () => {
  let component: DetailsDialogData;
  let fixture: ComponentFixture<DetailsDialogData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsDialogData],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsDialogData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
