import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSelectDialog } from './role-select-dialog';

describe('RoleSelectDialog', () => {
  let component: RoleSelectDialog;
  let fixture: ComponentFixture<RoleSelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleSelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleSelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
