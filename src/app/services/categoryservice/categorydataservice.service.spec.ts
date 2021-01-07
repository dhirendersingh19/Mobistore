import { TestBed } from '@angular/core/testing';

import { CategorydataserviceService } from './categorydataservice.service';

describe('CategorydataserviceService', () => {
  let service: CategorydataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorydataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
