import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowjonesAdditionalInfo } from './dowjones-additional-info';

describe('DowjonesAdditionalInfo', () => {
  let component: DowjonesAdditionalInfo;
  let fixture: ComponentFixture<DowjonesAdditionalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DowjonesAdditionalInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(DowjonesAdditionalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
