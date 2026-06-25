import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDashboardGraphs } from './realtime-dashboard-graphs';

describe('RealtimeDashboardGraphs', () => {
  let component: RealtimeDashboardGraphs;
  let fixture: ComponentFixture<RealtimeDashboardGraphs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeDashboardGraphs],
    }).compileComponents();

    fixture = TestBed.createComponent(RealtimeDashboardGraphs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
