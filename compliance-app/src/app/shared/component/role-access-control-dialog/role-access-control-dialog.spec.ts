import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAccessControlDialog } from './role-access-control-dialog';

describe('RoleAccessControlDialog', () => {
  let component: RoleAccessControlDialog;
  let fixture: ComponentFixture<RoleAccessControlDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleAccessControlDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleAccessControlDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
