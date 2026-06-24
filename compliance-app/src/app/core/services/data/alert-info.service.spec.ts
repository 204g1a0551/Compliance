import { TestBed } from '@angular/core/testing';

import { AlertInfoService } from './alert-info.service';

describe('AlertInfoService', () => {
  let service: AlertInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
