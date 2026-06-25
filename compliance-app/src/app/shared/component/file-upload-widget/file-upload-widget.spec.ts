import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadWidget } from './file-upload-widget';

describe('FileUploadWidget', () => {
  let component: FileUploadWidget;
  let fixture: ComponentFixture<FileUploadWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
