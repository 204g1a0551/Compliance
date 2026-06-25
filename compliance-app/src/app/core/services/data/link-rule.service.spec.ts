import { TestBed } from '@angular/core/testing';

import { LinkRuleService } from './link-rule.service';

describe('LinkRuleService', () => {
  let service: LinkRuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkRuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
