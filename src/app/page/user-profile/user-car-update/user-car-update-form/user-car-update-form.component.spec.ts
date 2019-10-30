import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCarUpdateFormComponent } from './user-car-update-form.component';

describe('UserCarUpdateFormComponent', () => {
  let component: UserCarUpdateFormComponent;
  let fixture: ComponentFixture<UserCarUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCarUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCarUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
