import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionSelect } from './region-select';

describe('RegionSelect', () => {
  let component: RegionSelect;
  let fixture: ComponentFixture<RegionSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
