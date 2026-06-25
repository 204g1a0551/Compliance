import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListWidget } from './check-list-widget';

describe('CheckListWidget', () => {
  let component: CheckListWidget;
  let fixture: ComponentFixture<CheckListWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckListWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckListWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
