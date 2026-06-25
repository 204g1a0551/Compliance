import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMappingDialog } from './details-mapping-dialog';

describe('DetailsMappingDialog', () => {
  let component: DetailsMappingDialog;
  let fixture: ComponentFixture<DetailsMappingDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMappingDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsMappingDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
