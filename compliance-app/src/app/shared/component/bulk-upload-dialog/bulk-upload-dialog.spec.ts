import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadDialog } from './bulk-upload-dialog';

describe('BulkUploadDialog', () => {
  let component: BulkUploadDialog;
  let fixture: ComponentFixture<BulkUploadDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkUploadDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BulkUploadDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
