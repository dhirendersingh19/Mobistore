import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionStorageService } from 'ngx-webstorage';
import { CartdataserviceService } from '../cartservice/cartdataservice.service';

import { CheckserviceService } from './checkservice.service';

describe('CheckserviceService', () => {
  let service: CheckserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers:[CheckserviceService, CartdataserviceService, SessionStorageService]
    });
    service = TestBed.inject(CheckserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
