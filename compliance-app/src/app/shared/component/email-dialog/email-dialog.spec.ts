import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDialog } from './email-dialog';

describe('EmailDialog', () => {
  let component: EmailDialog;
  let fixture: ComponentFixture<EmailDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
