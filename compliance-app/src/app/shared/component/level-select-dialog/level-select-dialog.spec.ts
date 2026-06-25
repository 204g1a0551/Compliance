import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSelectDialog } from './level-select-dialog';

describe('LevelSelectDialog', () => {
  let component: LevelSelectDialog;
  let fixture: ComponentFixture<LevelSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(LevelSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
