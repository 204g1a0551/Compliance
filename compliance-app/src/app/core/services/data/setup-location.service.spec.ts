import { TestBed } from '@angular/core/testing';

import { SetupLocationService } from './setup-location.service';

describe('SetupLocationService', () => {
  let service: SetupLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
