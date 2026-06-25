import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidientDetailsDialog } from './incidient-details-dialog';

describe('IncidientDetailsDialog', () => {
  let component: IncidientDetailsDialog;
  let fixture: ComponentFixture<IncidientDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidientDetailsDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidientDetailsDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
