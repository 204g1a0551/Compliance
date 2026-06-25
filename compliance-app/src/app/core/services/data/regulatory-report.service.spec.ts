import { TestBed } from '@angular/core/testing';

import { RegulatoryReportService } from './regulatory-report.service';

describe('RegulatoryReportService', () => {
  let service: RegulatoryReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegulatoryReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
