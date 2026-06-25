import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertInvestigationWidget } from './alert-investigation-widget';

describe('AlertInvestigationWidget', () => {
  let component: AlertInvestigationWidget;
  let fixture: ComponentFixture<AlertInvestigationWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertInvestigationWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertInvestigationWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
