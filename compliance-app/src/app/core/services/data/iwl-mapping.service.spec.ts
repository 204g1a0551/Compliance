import { TestBed } from '@angular/core/testing';

import { IwlMappingService } from './iwl-mapping.service';

describe('IwlMappingService', () => {
  let service: IwlMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IwlMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
