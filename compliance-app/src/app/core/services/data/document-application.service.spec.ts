import { TestBed } from '@angular/core/testing';

import { DocumentApplicationService } from './document-application.service';

describe('DocumentApplicationService', () => {
  let service: DocumentApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
