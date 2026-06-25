import { TestBed } from '@angular/core/testing';

import { MisReportsService } from './mis-reports.service';

describe('MisReportsService', () => {
  let service: MisReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
