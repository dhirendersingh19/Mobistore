import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SessionStorageService } from 'ngx-webstorage';
import { CartdataserviceService } from 'src/app/services/cartservice/cartdataservice.service';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

import { ServerlistGuard } from './serverlist.guard';

describe('ServerlistGuard', () => {
  let guard: ServerlistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      providers: [ServerlistGuard, SessionStorageService, CheckserviceService, CartdataserviceService]
    });
    guard = TestBed.inject(ServerlistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
