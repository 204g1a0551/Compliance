import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationGraphLookupDialog } from './simulation-graph-lookup-dialog';

describe('SimulationGraphLookupDialog', () => {
  let component: SimulationGraphLookupDialog;
  let fixture: ComponentFixture<SimulationGraphLookupDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationGraphLookupDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SimulationGraphLookupDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
