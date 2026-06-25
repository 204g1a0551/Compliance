import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSelectionDialog } from './element-selection-dialog';

describe('ElementSelectionDialog', () => {
  let component: ElementSelectionDialog;
  let fixture: ComponentFixture<ElementSelectionDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSelectionDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(ElementSelectionDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
