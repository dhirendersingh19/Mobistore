import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionStorageService } from 'ngx-webstorage';
import { CartdataserviceService } from 'src/app/services/cartservice/cartdataservice.service';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

import { InventoryGuard } from './inventory.guard';

describe('InventoryGuard', () => {
  let guard: InventoryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      providers:[InventoryGuard, CheckserviceService, CartdataserviceService, SessionStorageService]
    });
    guard = TestBed.inject(InventoryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
