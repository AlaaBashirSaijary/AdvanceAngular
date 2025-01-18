import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetalertNotificationComponent } from './sweetalert-notification.component';

describe('SweetalertNotificationComponent', () => {
  let component: SweetalertNotificationComponent;
  let fixture: ComponentFixture<SweetalertNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SweetalertNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SweetalertNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
