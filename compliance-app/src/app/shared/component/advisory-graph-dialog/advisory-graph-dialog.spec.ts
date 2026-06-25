import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisoryGraphDialog } from './advisory-graph-dialog';

describe('AdvisoryGraphDialog', () => {
  let component: AdvisoryGraphDialog;
  let fixture: ComponentFixture<AdvisoryGraphDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvisoryGraphDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvisoryGraphDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
