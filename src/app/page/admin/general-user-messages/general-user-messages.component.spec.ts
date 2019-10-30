import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUserMessagesComponent } from './general-user-messages.component';

describe('GeneralUserMessagesComponent', () => {
  let component: GeneralUserMessagesComponent;
  let fixture: ComponentFixture<GeneralUserMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralUserMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralUserMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
