import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSimulationDialog } from './add-simulation-dialog';

describe('AddSimulationDialog', () => {
  let component: AddSimulationDialog;
  let fixture: ComponentFixture<AddSimulationDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSimulationDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AddSimulationDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
