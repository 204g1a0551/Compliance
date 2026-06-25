import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailDialog } from './send-email-dialog';

describe('SendEmailDialog', () => {
  let component: SendEmailDialog;
  let fixture: ComponentFixture<SendEmailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendEmailDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(SendEmailDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
