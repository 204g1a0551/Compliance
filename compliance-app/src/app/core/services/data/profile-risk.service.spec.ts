import { TestBed } from '@angular/core/testing';

import { ProfileRiskService } from './profile-risk.service';

describe('ProfileRiskService', () => {
  let service: ProfileRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
