import { TestBed } from '@angular/core/testing';

import { AuditScreenService } from './audit-screen.service';

describe('AuditScreenService', () => {
  let service: AuditScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
