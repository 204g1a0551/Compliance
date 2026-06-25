import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlfAiScoreJustification } from './wlf-ai-score-justification';

describe('WlfAiScoreJustification', () => {
  let component: WlfAiScoreJustification;
  let fixture: ComponentFixture<WlfAiScoreJustification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WlfAiScoreJustification],
    }).compileComponents();

    fixture = TestBed.createComponent(WlfAiScoreJustification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
