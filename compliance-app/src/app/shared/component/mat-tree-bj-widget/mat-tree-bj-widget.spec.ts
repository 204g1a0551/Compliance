import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeBjWidget } from './mat-tree-bj-widget';

describe('MatTreeBjWidget', () => {
  let component: MatTreeBjWidget;
  let fixture: ComponentFixture<MatTreeBjWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTreeBjWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(MatTreeBjWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
