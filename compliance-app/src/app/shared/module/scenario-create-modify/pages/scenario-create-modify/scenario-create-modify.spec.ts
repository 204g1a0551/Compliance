import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioCreateModify } from './scenario-create-modify';

describe('ScenarioCreateModify', () => {
  let component: ScenarioCreateModify;
  let fixture: ComponentFixture<ScenarioCreateModify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioCreateModify],
    }).compileComponents();

    fixture = TestBed.createComponent(ScenarioCreateModify);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
