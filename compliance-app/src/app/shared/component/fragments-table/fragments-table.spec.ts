import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentsTable } from './fragments-table';

describe('FragmentsTable', () => {
  let component: FragmentsTable;
  let fixture: ComponentFixture<FragmentsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FragmentsTable],
    }).compileComponents();

    fixture = TestBed.createComponent(FragmentsTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
