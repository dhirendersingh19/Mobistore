import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionStorageService } from 'ngx-webstorage';
import { CartdataserviceService } from 'src/app/services/cartservice/cartdataservice.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [CartdataserviceService, SessionStorageService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain your cart', () => {
  const fixture = TestBed.createComponent(CartComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  expect(compiled.querySelector('h5').textContent).toContain('Your Cart');
  });

});
