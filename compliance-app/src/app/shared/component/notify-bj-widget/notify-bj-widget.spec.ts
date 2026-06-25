import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyBjWidget } from './notify-bj-widget';

describe('NotifyBjWidget', () => {
  let component: NotifyBjWidget;
  let fixture: ComponentFixture<NotifyBjWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifyBjWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(NotifyBjWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
