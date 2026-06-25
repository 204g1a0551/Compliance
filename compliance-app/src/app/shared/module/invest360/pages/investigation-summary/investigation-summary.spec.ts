import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigationSummary } from './investigation-summary';

describe('InvestigationSummary', () => {
  let component: InvestigationSummary;
  let fixture: ComponentFixture<InvestigationSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestigationSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestigationSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
