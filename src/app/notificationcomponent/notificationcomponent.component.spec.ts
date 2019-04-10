import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationcomponentComponent } from './notificationcomponent.component';

describe('NotificationcomponentComponent', () => {
  let component: NotificationcomponentComponent;
  let fixture: ComponentFixture<NotificationcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
