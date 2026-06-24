import { TestBed } from '@angular/core/testing';

import { AccessScreenService } from './access-screen.service';

describe('AccessScreenService', () => {
  let service: AccessScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
