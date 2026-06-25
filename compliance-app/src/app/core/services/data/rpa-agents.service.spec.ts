import { TestBed } from '@angular/core/testing';

import { RpaAgentsService } from './rpa-agents.service';

describe('RpaAgentsService', () => {
  let service: RpaAgentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpaAgentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
