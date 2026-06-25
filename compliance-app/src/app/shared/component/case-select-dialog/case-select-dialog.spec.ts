import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSelectDialog } from './case-select-dialog';

describe('CaseSelectDialog', () => {
  let component: CaseSelectDialog;
  let fixture: ComponentFixture<CaseSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(CaseSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
