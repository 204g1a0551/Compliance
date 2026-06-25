import { TestBed } from '@angular/core/testing';

import { StagingAccountService } from './staging-account.service';

describe('StagingAccountService', () => {
  let service: StagingAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagingAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
