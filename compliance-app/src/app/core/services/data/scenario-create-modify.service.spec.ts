import { TestBed } from '@angular/core/testing';

import { ScenarioCreateModifyService } from './scenario-create-modify.service';

describe('ScenarioCreateModifyService', () => {
  let service: ScenarioCreateModifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioCreateModifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
