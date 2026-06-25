import { TestBed } from '@angular/core/testing';

import { StagingCustomerService } from './staging-customer.service';

describe('StagingCustomerService', () => {
  let service: StagingCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagingCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
