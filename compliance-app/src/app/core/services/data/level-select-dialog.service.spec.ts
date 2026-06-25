import { TestBed } from '@angular/core/testing';

import { LevelSelectDialogService } from './level-select-dialog.service';

describe('LevelSelectDialogService', () => {
  let service: LevelSelectDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelSelectDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
