import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarStrReportDialog } from './sar-str-report-dialog';

describe('SarStrReportDialog', () => {
  let component: SarStrReportDialog;
  let fixture: ComponentFixture<SarStrReportDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SarStrReportDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SarStrReportDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
