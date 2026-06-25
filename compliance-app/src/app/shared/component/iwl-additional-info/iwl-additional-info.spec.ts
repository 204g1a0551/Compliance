import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwlAdditionalInfo } from './iwl-additional-info';

describe('IwlAdditionalInfo', () => {
  let component: IwlAdditionalInfo;
  let fixture: ComponentFixture<IwlAdditionalInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IwlAdditionalInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(IwlAdditionalInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
