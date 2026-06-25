import { TestBed } from '@angular/core/testing';

import { TokensManagementService } from './tokens-management.service';

describe('TokensManagementService', () => {
  let service: TokensManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokensManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
