import { TestBed } from '@angular/core/testing';

import { ServiceAppointmentsService } from './service-appointments.service';

describe('ServiceAppointmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAppointmentsService = TestBed.get(ServiceAppointmentsService);
    expect(service).toBeTruthy();
  });
});
