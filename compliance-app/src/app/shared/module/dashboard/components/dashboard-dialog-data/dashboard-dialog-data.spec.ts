import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDialogData } from './dashboard-dialog-data';

describe('DashboardDialogData', () => {
  let component: DashboardDialogData;
  let fixture: ComponentFixture<DashboardDialogData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDialogData],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDialogData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
