import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaiDisplayDialog } from './gai-display-dialog';

describe('GaiDisplayDialog', () => {
  let component: GaiDisplayDialog;
  let fixture: ComponentFixture<GaiDisplayDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaiDisplayDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(GaiDisplayDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
