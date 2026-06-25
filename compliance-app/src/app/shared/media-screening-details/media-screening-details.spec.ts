import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaScreeningDetails } from './media-screening-details';

describe('MediaScreeningDetails', () => {
  let component: MediaScreeningDetails;
  let fixture: ComponentFixture<MediaScreeningDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaScreeningDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaScreeningDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
