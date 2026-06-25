import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictiveAnalysisChartBj } from './predictive-analysis-chart-bj';

describe('PredictiveAnalysisChartBj', () => {
  let component: PredictiveAnalysisChartBj;
  let fixture: ComponentFixture<PredictiveAnalysisChartBj>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredictiveAnalysisChartBj],
    }).compileComponents();

    fixture = TestBed.createComponent(PredictiveAnalysisChartBj);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
