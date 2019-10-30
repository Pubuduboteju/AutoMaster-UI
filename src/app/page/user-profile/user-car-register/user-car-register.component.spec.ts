import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarRegisterComponent } from './user-car-register.component';

describe('UserCarRegisterComponent', () => {
  let component: UserCarRegisterComponent;
  let fixture: ComponentFixture<UserCarRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
