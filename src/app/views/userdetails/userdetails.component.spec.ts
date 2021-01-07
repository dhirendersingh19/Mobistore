import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';
import { UserdataserviceService } from 'src/app/services/userdata/userdataservice.service';

import { UserdetailsComponent } from './userdetails.component';

xdescribe('UserdetailsComponent', () => {
  let component: UserdetailsComponent;
  let fixture: ComponentFixture<UserdetailsComponent>;

  let mockSomeService = { getSignUpStatus: () => { return {subscribe: () => {} } } }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
      declarations: [ UserdetailsComponent ],
      providers: [ UserdataserviceService, { provide: CheckserviceService, useValue: mockSomeService}, SessionStorageService,LocalStorageService, { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get(): string { return '1'; }, }, }, }, }]
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
