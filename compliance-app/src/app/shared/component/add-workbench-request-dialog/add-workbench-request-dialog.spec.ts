import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkbenchRequestDialog } from './add-workbench-request-dialog';

describe('AddWorkbenchRequestDialog', () => {
  let component: AddWorkbenchRequestDialog;
  let fixture: ComponentFixture<AddWorkbenchRequestDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWorkbenchRequestDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddWorkbenchRequestDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
