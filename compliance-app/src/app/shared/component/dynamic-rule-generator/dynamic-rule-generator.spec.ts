import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRuleGenerator } from './dynamic-rule-generator';

describe('DynamicRuleGenerator', () => {
  let component: DynamicRuleGenerator;
  let fixture: ComponentFixture<DynamicRuleGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRuleGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicRuleGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
