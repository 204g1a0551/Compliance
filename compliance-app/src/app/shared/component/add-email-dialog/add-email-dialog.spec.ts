import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailDialog } from './add-email-dialog';

describe('AddEmailDialog', () => {
  let component: AddEmailDialog;
  let fixture: ComponentFixture<AddEmailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEmailDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEmailDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
