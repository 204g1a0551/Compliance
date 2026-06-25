import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutowireAlertDialog } from './autowire-alert-dialog';

describe('AutowireAlertDialog', () => {
  let component: AutowireAlertDialog;
  let fixture: ComponentFixture<AutowireAlertDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutowireAlertDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(AutowireAlertDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
