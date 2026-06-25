import { TestBed } from '@angular/core/testing';

import { ConfigurationHomeService } from './configuration-home.service';

describe('ConfigurationHomeService', () => {
  let service: ConfigurationHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigurationHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
