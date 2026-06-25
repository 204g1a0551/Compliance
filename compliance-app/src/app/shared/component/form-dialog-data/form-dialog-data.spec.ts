import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialogData } from './form-dialog-data';

describe('FormDialogData', () => {
  let component: FormDialogData;
  let fixture: ComponentFixture<FormDialogData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDialogData],
    }).compileComponents();

    fixture = TestBed.createComponent(FormDialogData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
