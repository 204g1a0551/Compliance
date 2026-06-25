import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiJustification } from './ai-justification';

describe('AiJustification', () => {
  let component: AiJustification;
  let fixture: ComponentFixture<AiJustification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiJustification],
    }).compileComponents();

    fixture = TestBed.createComponent(AiJustification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
