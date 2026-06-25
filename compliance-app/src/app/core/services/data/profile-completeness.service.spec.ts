import { TestBed } from '@angular/core/testing';

import { ProfileCompletenessService } from './profile-completeness.service';

describe('ProfileCompletenessService', () => {
  let service: ProfileCompletenessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileCompletenessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
