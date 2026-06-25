import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldcheckAdditionalInfo } from './worldcheck-additional-info';

describe('WorldcheckAdditionalInfo', () => {
  let component: WorldcheckAdditionalInfo;
  let fixture: ComponentFixture<WorldcheckAdditionalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldcheckAdditionalInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(WorldcheckAdditionalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
