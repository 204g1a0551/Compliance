import { TestBed } from '@angular/core/testing';

import { WorkflowAlertpriorityService } from './workflow-alertpriority.service';

describe('WorkflowAlertpriorityService', () => {
  let service: WorkflowAlertpriorityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowAlertpriorityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
