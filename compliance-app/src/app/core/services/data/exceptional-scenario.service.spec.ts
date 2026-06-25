import { TestBed } from '@angular/core/testing';

import { ExceptionalScenarioService } from './exceptional-scenario.service';

describe('ExceptionalScenarioService', () => {
  let service: ExceptionalScenarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionalScenarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
