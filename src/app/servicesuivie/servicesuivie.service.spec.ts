import { TestBed } from '@angular/core/testing';

import { ServicesuivieService } from './servicesuivie.service';

describe('ServicesuivieService', () => {
  let service: ServicesuivieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesuivieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
