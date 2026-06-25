import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMapping } from './details-mapping';

describe('DetailsMapping', () => {
  let component: DetailsMapping;
  let fixture: ComponentFixture<DetailsMapping>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMapping],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsMapping);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
