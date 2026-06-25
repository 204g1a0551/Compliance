import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDetailsWidget } from './cust-details-widget';

describe('CustDetailsWidget', () => {
  let component: CustDetailsWidget;
  let fixture: ComponentFixture<CustDetailsWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustDetailsWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(CustDetailsWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
