import { TestBed } from '@angular/core/testing';

import { ServicepovService } from './servicepov.service';

describe('ServicepovService', () => {
  let service: ServicepovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicepovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
