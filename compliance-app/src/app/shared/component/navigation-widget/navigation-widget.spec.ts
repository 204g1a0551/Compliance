import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWidget } from './navigation-widget';

describe('NavigationWidget', () => {
  let component: NavigationWidget;
  let fixture: ComponentFixture<NavigationWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
