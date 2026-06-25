import { TestBed } from '@angular/core/testing';

import { SetupHolidaylistService } from './setup-holidaylist.service';

describe('SetupHolidaylistService', () => {
  let service: SetupHolidaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupHolidaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
