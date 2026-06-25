import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSelectDialog } from './event-select-dialog';

describe('EventSelectDialog', () => {
  let component: EventSelectDialog;
  let fixture: ComponentFixture<EventSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(EventSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
