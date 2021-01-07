import { TestBed } from '@angular/core/testing';

import { ProductdataserviceService } from './productdataservice.service';

describe('ProductdataserviceService', () => {
  let service: ProductdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
