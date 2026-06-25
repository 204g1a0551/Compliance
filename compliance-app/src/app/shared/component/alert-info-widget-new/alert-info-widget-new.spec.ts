import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertInfoWidgetNew } from './alert-info-widget-new';

describe('AlertInfoWidgetNew', () => {
  let component: AlertInfoWidgetNew;
  let fixture: ComponentFixture<AlertInfoWidgetNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertInfoWidgetNew],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertInfoWidgetNew);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
