import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionStorageService } from 'ngx-webstorage';
import { CartdataserviceService } from 'src/app/services/cartservice/cartdataservice.service';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

import { LocallistGuard } from './locallist.guard';

describe('LocallistGuard', () => {
  let guard: LocallistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      providers: [LocallistGuard, SessionStorageService, CheckserviceService, CartdataserviceService]
    });
    guard = TestBed.inject(LocallistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
