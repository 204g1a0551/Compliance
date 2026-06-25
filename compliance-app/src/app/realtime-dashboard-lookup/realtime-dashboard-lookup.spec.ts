import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDashboardLookup } from './realtime-dashboard-lookup';

describe('RealtimeDashboardLookup', () => {
  let component: RealtimeDashboardLookup;
  let fixture: ComponentFixture<RealtimeDashboardLookup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeDashboardLookup],
    }).compileComponents();

    fixture = TestBed.createComponent(RealtimeDashboardLookup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
