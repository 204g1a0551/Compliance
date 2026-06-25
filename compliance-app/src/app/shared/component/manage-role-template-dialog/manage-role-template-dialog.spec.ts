import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoleTemplateDialog } from './manage-role-template-dialog';

describe('ManageRoleTemplateDialog', () => {
  let component: ManageRoleTemplateDialog;
  let fixture: ComponentFixture<ManageRoleTemplateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRoleTemplateDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageRoleTemplateDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
