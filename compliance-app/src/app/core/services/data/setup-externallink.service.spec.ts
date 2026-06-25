import { TestBed } from '@angular/core/testing';

import { SetupExternallinkService } from './setup-externallink.service';

describe('SetupExternallinkService', () => {
  let service: SetupExternallinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupExternallinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
