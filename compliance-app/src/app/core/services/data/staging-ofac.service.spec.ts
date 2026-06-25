import { TestBed } from '@angular/core/testing';

import { StagingOfacService } from './staging-ofac.service';

describe('StagingOfacService', () => {
  let service: StagingOfacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagingOfacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
