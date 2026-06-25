import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaScreeningDispayDetails } from './media-screening-dispay-details';

describe('MediaScreeningDispayDetails', () => {
  let component: MediaScreeningDispayDetails;
  let fixture: ComponentFixture<MediaScreeningDispayDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaScreeningDispayDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaScreeningDispayDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
