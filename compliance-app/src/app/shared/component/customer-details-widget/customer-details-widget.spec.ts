import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsWidget } from './customer-details-widget';

describe('CustomerDetailsWidget', () => {
  let component: CustomerDetailsWidget;
  let fixture: ComponentFixture<CustomerDetailsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailsWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
