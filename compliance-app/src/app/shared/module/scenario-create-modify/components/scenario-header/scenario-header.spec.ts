import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioHeader } from './scenario-header';

describe('ScenarioHeader', () => {
  let component: ScenarioHeader;
  let fixture: ComponentFixture<ScenarioHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ScenarioHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
