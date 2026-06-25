import { TestBed } from '@angular/core/testing';

import { HttpErrorHanlderService } from './http-error-hanlder.service';

describe('HttpErrorHanlderService', () => {
  let service: HttpErrorHanlderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorHanlderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
