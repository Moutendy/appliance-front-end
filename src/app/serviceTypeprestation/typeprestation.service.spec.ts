import { TestBed } from '@angular/core/testing';

import { TypeprestationService } from './typeprestation.service';

describe('TypeprestationService', () => {
  let service: TypeprestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeprestationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
