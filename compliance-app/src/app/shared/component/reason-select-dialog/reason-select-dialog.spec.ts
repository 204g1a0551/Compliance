import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonSelectDialog } from './reason-select-dialog';

describe('ReasonSelectDialog', () => {
  let component: ReasonSelectDialog;
  let fixture: ComponentFixture<ReasonSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReasonSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ReasonSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
