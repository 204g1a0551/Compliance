import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioSelectDialog } from './scenario-select-dialog';

describe('ScenarioSelectDialog', () => {
  let component: ScenarioSelectDialog;
  let fixture: ComponentFixture<ScenarioSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ScenarioSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
