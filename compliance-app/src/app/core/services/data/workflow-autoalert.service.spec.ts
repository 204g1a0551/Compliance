import { TestBed } from '@angular/core/testing';

import { WorkflowAutoalertService } from './workflow-autoalert.service';

describe('WorkflowAutoalertService', () => {
  let service: WorkflowAutoalertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowAutoalertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
