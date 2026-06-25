import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPreferenceSelectionList } from './screen-preference-selection-list';

describe('ScreenPreferenceSelectionList', () => {
  let component: ScreenPreferenceSelectionList;
  let fixture: ComponentFixture<ScreenPreferenceSelectionList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenPreferenceSelectionList],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenPreferenceSelectionList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
