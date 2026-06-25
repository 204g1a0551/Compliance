import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSearchPopup } from './advance-search-popup';

describe('AdvanceSearchPopup', () => {
  let component: AdvanceSearchPopup;
  let fixture: ComponentFixture<AdvanceSearchPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceSearchPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvanceSearchPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
