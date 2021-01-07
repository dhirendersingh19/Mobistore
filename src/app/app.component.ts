import { Component } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { CartData } from './customer/cart/cartdata';
import { SignUpData } from './formspage/signup/signUpdata';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mobistore';

  cart: Array<CartData>;
  localUserDetails: Array<SignUpData>;
  
  constructor(private session: SessionStorageService, private storage: LocalStorageService){}

  ngOnInit(){
    this.cart = new Array<CartData>();
    let totalAmount:number;
    this.session.store('cartdetails',JSON.stringify(this.cart));
    this.session.store('totalamount',JSON.stringify(totalAmount));

    let userDetails = {
      "admin":"admin",
      "rohit": "demo",
      "mohit": "india",
      "raj": "book"
    }

    const adminList = ["admin"];

    this.localUserDetails = new Array<SignUpData>();
    this.storage.store('UserDetails', JSON.stringify(userDetails));
    this.storage.store('AdminList', JSON.stringify(adminList));
    this.storage.store('LocalUserData', JSON.stringify(this.localUserDetails));
  }
}
