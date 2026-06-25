import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertScoreDetails } from './alert-score-details';

describe('AlertScoreDetails', () => {
  let component: AlertScoreDetails;
  let fixture: ComponentFixture<AlertScoreDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertScoreDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertScoreDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
