import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarWidget } from './side-bar-widget';

describe('SideBarWidget', () => {
  let component: SideBarWidget;
  let fixture: ComponentFixture<SideBarWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(SideBarWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
