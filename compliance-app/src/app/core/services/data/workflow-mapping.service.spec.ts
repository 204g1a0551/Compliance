import { TestBed } from '@angular/core/testing';

import { WorkflowMappingService } from './workflow-mapping.service';

describe('WorkflowMappingService', () => {
  let service: WorkflowMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
