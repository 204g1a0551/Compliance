import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FincenAdditionalInfo } from './fincen-additional-info';

describe('FincenAdditionalInfo', () => {
  let component: FincenAdditionalInfo;
  let fixture: ComponentFixture<FincenAdditionalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FincenAdditionalInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(FincenAdditionalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
