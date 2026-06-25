import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KycProvideCustomerDetails } from './kyc-provide-customer-details';

describe('KycProvideCustomerDetails', () => {
  let component: KycProvideCustomerDetails;
  let fixture: ComponentFixture<KycProvideCustomerDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KycProvideCustomerDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(KycProvideCustomerDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
