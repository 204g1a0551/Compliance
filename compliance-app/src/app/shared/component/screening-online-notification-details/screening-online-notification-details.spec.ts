import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningOnlineNotificationDetails } from './screening-online-notification-details';

describe('ScreeningOnlineNotificationDetails', () => {
  let component: ScreeningOnlineNotificationDetails;
  let fixture: ComponentFixture<ScreeningOnlineNotificationDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreeningOnlineNotificationDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreeningOnlineNotificationDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
