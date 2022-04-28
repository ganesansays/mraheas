import { TestBed } from '@angular/core/testing';

import { GrievancesService } from './grievances.service';

describe('GrievancesService', () => {
  let service: GrievancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrievancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
