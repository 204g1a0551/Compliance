import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitySelectDialog } from './entity-select-dialog';

describe('EntitySelectDialog', () => {
  let component: EntitySelectDialog;
  let fixture: ComponentFixture<EntitySelectDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntitySelectDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(EntitySelectDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
