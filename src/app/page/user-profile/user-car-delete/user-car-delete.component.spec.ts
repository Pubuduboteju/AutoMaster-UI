import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarDeleteComponent } from './user-car-delete.component';

describe('UserCarDeleteComponent', () => {
  let component: UserCarDeleteComponent;
  let fixture: ComponentFixture<UserCarDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
