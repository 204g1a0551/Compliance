import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitNotification } from './commit-notification';

describe('CommitNotification', () => {
  let component: CommitNotification;
  let fixture: ComponentFixture<CommitNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitNotification],
    }).compileComponents();

    fixture = TestBed.createComponent(CommitNotification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
