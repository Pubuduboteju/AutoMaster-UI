import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStationsComponent } from './service-stations.component';

describe('ServiceStationsComponent', () => {
  let component: ServiceStationsComponent;
  let fixture: ComponentFixture<ServiceStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
