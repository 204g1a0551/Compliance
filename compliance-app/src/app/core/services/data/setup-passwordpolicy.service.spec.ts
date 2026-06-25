import { TestBed } from '@angular/core/testing';

import { SetupPasswordpolicyService } from './setup-passwordpolicy.service';

describe('SetupPasswordpolicyService', () => {
  let service: SetupPasswordpolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPasswordpolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
