import { TestBed } from '@angular/core/testing';

import { StagingIwlService } from './staging-iwl.service';

describe('StagingIwlService', () => {
  let service: StagingIwlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagingIwlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
