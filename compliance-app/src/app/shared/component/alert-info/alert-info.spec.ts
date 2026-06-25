import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertInfo } from './alert-info';

describe('AlertInfo', () => {
  let component: AlertInfo;
  let fixture: ComponentFixture<AlertInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
