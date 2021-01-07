import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartData } from 'src/app/customer/cart/cartdata';
import { CartdataserviceService } from '../cartservice/cartdataservice.service';
import { CategorydataserviceService } from '../categoryservice/categorydataservice.service';
import { Products } from '../productdata/product';
import { ProductdataserviceService } from '../productdata/productdataservice.service';

@Injectable({
  providedIn: 'root'
})
export class CheckserviceService {

  adminStatus = new BehaviorSubject<boolean>(false);
  loggedInStatus = new BehaviorSubject<boolean>(false);
  currentUserStatus = new BehaviorSubject<string>('guest');
  isEditStatus = new BehaviorSubject<boolean>(false);
  isLocalClick = new BehaviorSubject<boolean>(false);
  isSignUpClick = new BehaviorSubject<boolean>(false);

  cart: Array<CartData>;
  productsList:Array<Products>;

  constructor(private cartservice: CartdataserviceService,private router:Router, private product:ProductdataserviceService, private cartService:CartdataserviceService) {
    this.cart = new Array<CartData>();
    // this.product.getProducts().subscribe(data => {
    //   this.productsList = data;
    // })

    this.productsList = this.product.getProducts();
   }

  /* Admin Status */ 
  setAdminStatus(set:boolean){
    this.adminStatus.next(set);
  }
  getAdminStatus(){
    return this.adminStatus.asObservable();
  }

  /* LoggedIn Status */
  setLoggedInStatus(set:boolean){
    this.loggedInStatus.next(set);
  }
  getLoggedInStatus(){
    return this.loggedInStatus.asObservable();
  }

  /* Current User */
  setCurrentUser(set:string){
    this.currentUserStatus.next(set);
  }
  getCurrentUser(){
    return this.currentUserStatus.asObservable();
  }

  /* Can edit? */
  setEdit(set:boolean){
    this.isEditStatus.next(set);
  }
  getEdit(){
    return this.isEditStatus.asObservable();
  }

  /* Reset Cart ==> Put Back Cart Item to AllProducts before logout */

  resetcart(){

    this.cartService.getCartList().subscribe(status => {
      this.cart = status;
    })
    // this.cartservice.cartList.next(null);
    // this.cartservice.cart.splice(0,this.cartservice.cart.length);

    let temp = null;
    // console.log(this.cart);
    if(this.cart!=null && this.cart.length>0){
      temp = new Array<CartData>();
      temp = this.cart;
      // console.log(temp);
    }
    // console.log(temp);
    // console.log(temp.lenght);
    // console.log(this.productsList.length);
    if(temp!=null){
      if(this.cart.length>0){
        // console.log('Inside Temp!=null');
        for(let i=0;i<this.productsList.length;i++){
        // if(temp && temp.length<1){
        for(let j=0;j<temp.length;j++){
        if(this.productsList[i].id==temp[j].id){
          this.productsList[i].stock = this.productsList[i].stock + temp[j].quatity;
          // console.log(temp);
          temp.splice(j,1);
        }
      }
      // }
    }
      }
    }
    // console.log(temp);
    this.cart = temp;
    // console.log(this.cart);
    this.cartService.cartList.next(this.cart);
  }

  /* logout then all reset */
  allreset(){
    this.adminStatus.next(false);
    this.currentUserStatus.next('guest');
    this.loggedInStatus.next(false);
    this.isEditStatus.next(false);
    this.cartservice.total.next(0);
  }

  /* Set LocalClick */

  setLoalStatus(set:boolean){
    this.isLocalClick.next(set);
  }
  getLocalStatus(){
    return this.isLocalClick.asObservable();
  }

    /* Set SignUpClick */

  setSignUpStatus(set:boolean){
    this.isSignUpClick.next(set);
  }
  getSignUpStatus(){
    return this.isSignUpClick.asObservable();
  }
  
}
