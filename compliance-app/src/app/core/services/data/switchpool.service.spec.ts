import { TestBed } from '@angular/core/testing';

import { SwitchpoolService } from './switchpool.service';

describe('SwitchpoolService', () => {
  let service: SwitchpoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchpoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
