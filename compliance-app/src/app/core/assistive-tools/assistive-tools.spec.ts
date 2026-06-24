import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistiveTools } from './assistive-tools';

describe('AssistiveTools', () => {
  let component: AssistiveTools;
  let fixture: ComponentFixture<AssistiveTools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistiveTools],
    }).compileComponents();

    fixture = TestBed.createComponent(AssistiveTools);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
