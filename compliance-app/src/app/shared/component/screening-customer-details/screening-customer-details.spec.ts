import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningCustomerDetails } from './screening-customer-details';

describe('ScreeningCustomerDetails', () => {
  let component: ScreeningCustomerDetails;
  let fixture: ComponentFixture<ScreeningCustomerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningCustomerDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningCustomerDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
