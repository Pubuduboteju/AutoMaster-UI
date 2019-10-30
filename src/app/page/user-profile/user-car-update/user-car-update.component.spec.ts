import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarUpdateComponent } from './user-car-update.component';

describe('UserCarUpdateComponent', () => {
  let component: UserCarUpdateComponent;
  let fixture: ComponentFixture<UserCarUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
