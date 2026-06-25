import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfacAdditionalInfo } from './ofac-additional-info';

describe('OfacAdditionalInfo', () => {
  let component: OfacAdditionalInfo;
  let fixture: ComponentFixture<OfacAdditionalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfacAdditionalInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(OfacAdditionalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
