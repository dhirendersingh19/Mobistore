import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { BehaviorSubject } from 'rxjs';
import { CartData } from 'src/app/customer/cart/cartdata';

@Injectable({
  providedIn: 'root'
})
export class CartdataserviceService {

  /* Using Session Storage */
  // cart: Array<CartData>;
  

  /* Using Observable  */
  
  cart: Array<CartData>;
  cartList = new BehaviorSubject<CartData[]>(null);
  total = new BehaviorSubject<number>(0);

  constructor(private session:SessionStorageService) {
    /* Using Session Storage */
    // this.cart = new Array<CartData>();

    /* Using Observable  */
    this.cart = new Array<CartData>();
   }




  /* Using Session Storage */

  /* setCarttoLocal(Cart:CartData,price:number){
    let flag=0;
    this.cart = JSON.parse(this.session.retrieve('cartdetails'));
    if(this.cart && !this.cart.length){
      Cart.quatity+=Cart.quatity+1;
      this.cart.push(Cart);
      this.session.store('cartdetails',JSON.stringify(this.cart));
    }else{
        for(let i=0;i<this.cart.length;i++){
        if(this.cart[i].id==Cart.id){
          // console.log(this.cart[i]);
          this.cart[i].quatity=this.cart[i].quatity+1;
          this.cart[i].price=price*this.cart[i].quatity;
          flag=1;
          this.session.store('cartdetails',JSON.stringify(this.cart));
          break;
        }
      }
      if(flag!=1){
        Cart.quatity+=Cart.quatity+1;
        this.cart.push(Cart);
        this.session.store('cartdetails',JSON.stringify(this.cart));
      }
    }
    // console.log(this.cart);
    this.getTotattoLocal();
  }

  getTotattoLocal(){
    this.cart = JSON.parse(this.session.retrieve('cartdetails'));
    console.log(this.cart);
    let sum=0;
    for(let i=0;i<this.cart.length;i++){
      sum=sum+this.cart[i].price;
    }
    this.session.store('totalamount',JSON.stringify(sum));
    console.log(sum);
  } */


  /* Using Observable  */
  
  setCart(Cart:CartData,price:number){
    let flag=0;
    let temp = new Array<CartData>();
    temp = this.cart;
    if(temp && !temp.length){
      Cart.quatity+=Cart.quatity+1;
      this.cart.push(Cart);
      this.cartList.next(this.cart);
    }else{
      for(let i=0;i<temp.length;i++){
        if(temp[i].id==Cart.id){
          temp[i].quatity=temp[i].quatity+1;
          temp[i].price=price+temp[i].price;
          flag=1;
          this.cartList.next(this.cart);
          break;
        }
      }
      if(flag!=1){
        Cart.quatity+=Cart.quatity+1;
        this.cart.push(Cart);
        this.cartList.next(this.cart);
      }
    }
    this.getTotat();
  }
  
  getTotat(){
    let temp = new Array<CartData>();
    temp = this.cart;
    let sum=0;
    for(let i=0;i<temp.length;i++){
      sum=sum+temp[i].price;
    }
    this.total.next(sum);
    return this.total.asObservable();
  }

  getCartList(){
    return this.cartList.asObservable();
  }
}
