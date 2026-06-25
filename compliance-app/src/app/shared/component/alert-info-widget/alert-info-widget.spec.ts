import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertInfoWidget } from './alert-info-widget';

describe('AlertInfoWidget', () => {
  let component: AlertInfoWidget;
  let fixture: ComponentFixture<AlertInfoWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertInfoWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertInfoWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
