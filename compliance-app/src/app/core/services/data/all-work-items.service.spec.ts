import { TestBed } from '@angular/core/testing';

import { AllWorkItemsService } from './all-work-items.service';

describe('AllWorkItemsService', () => {
  let service: AllWorkItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllWorkItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
