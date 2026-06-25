import { TestBed } from '@angular/core/testing';

import { ManualChecklistService } from './manual-checklist.service';

describe('ManualChecklistService', () => {
  let service: ManualChecklistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualChecklistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
