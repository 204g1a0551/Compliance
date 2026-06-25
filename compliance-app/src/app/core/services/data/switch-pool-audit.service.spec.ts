import { TestBed } from '@angular/core/testing';

import { SwitchPoolAuditService } from './switch-pool-audit.service';

describe('SwitchPoolAuditService', () => {
  let service: SwitchPoolAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchPoolAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
