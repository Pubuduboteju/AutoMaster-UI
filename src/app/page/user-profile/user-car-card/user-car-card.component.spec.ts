import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarCardComponent } from './user-car-card.component';

describe('UserCarCardComponent', () => {
  let component: UserCarCardComponent;
  let fixture: ComponentFixture<UserCarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
