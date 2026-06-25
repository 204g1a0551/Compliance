import { TestBed } from '@angular/core/testing';

import { ReportsAdhocService } from './reports-adhoc.service';

describe('ReportsAdhocService', () => {
  let service: ReportsAdhocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportsAdhocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
