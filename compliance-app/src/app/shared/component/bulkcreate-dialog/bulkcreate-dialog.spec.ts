import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkcreateDialog } from './bulkcreate-dialog';

describe('BulkcreateDialog', () => {
  let component: BulkcreateDialog;
  let fixture: ComponentFixture<BulkcreateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkcreateDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(BulkcreateDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
