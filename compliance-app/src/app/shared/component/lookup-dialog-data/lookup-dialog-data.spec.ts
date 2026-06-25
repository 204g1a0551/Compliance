import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupDialogData } from './lookup-dialog-data';

describe('LookupDialogData', () => {
  let component: LookupDialogData;
  let fixture: ComponentFixture<LookupDialogData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookupDialogData],
    }).compileComponents();

    fixture = TestBed.createComponent(LookupDialogData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
