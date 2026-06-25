import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkGraph } from './network-graph';

describe('NetworkGraph', () => {
  let component: NetworkGraph;
  let fixture: ComponentFixture<NetworkGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworkGraph],
    }).compileComponents();

    fixture = TestBed.createComponent(NetworkGraph);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
