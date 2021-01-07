import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionStorageService } from 'ngx-webstorage';
import { CartdataserviceService } from 'src/app/services/cartservice/cartdataservice.service';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

import { CartGuard } from './cart.guard';

describe('CartGuard', () => {
  let guard: CartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      providers: [CheckserviceService, CartdataserviceService, CartGuard, SessionStorageService]
    });
    guard = TestBed.inject(CartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
