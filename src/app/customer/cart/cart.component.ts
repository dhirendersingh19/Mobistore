import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { CartdataserviceService } from 'src/app/services/cartservice/cartdataservice.service';
import { CategorydataserviceService } from 'src/app/services/categoryservice/categorydataservice.service';
import { Products } from 'src/app/services/productdata/product';
import { ProductdataserviceService } from 'src/app/services/productdata/productdataservice.service';
import { CartData } from './cartdata';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /* Using Session Storage  */
  /* cart: Array<CartData>;
  total:number; */

  /* Using Observable  */

  cart: Array<CartData>;
  productsList:Array<Products>;
  total: number;

  constructor(/* private session:SessionStorageService, */private product:ProductdataserviceService ,private cartService:CartdataserviceService) {
    /* Using Session Storage  */
    /* this.cart = new Array<CartData>();  */


    /* Using Observable  */
    this.cart = new Array<CartData>();
    // this.product.getProducts().subscribe(data => {
    //   this.productsList = data;
    // })
   }

  ngOnInit(): void {

    /* Using Session Storage  */

    /* this.cart = JSON.parse(this.session.retrieve('cartdetails'));
    this.total = JSON.parse(this.session.retrieve('totalamount'));
    console.log(this.total); */



    /* Using Observable  */

    this.productsList = this.product.getProducts();
    this.cartService.getCartList().subscribe(status => {
      this.cart = status;
    })
    this.cartService.getTotat().subscribe(sum => {
      this.total = sum;
    })
  }

  getTotal(){
    if(this.total<1){
      return false;
    }else{
      return true;
    }
  }

  minusQuantity(id:number){
    let temp = new Array<CartData>();
    // console.log(id);
    temp = this.cart;
    // console.log(temp);
    for(let i=0;i<this.productsList.length;i++){
        if(this.productsList[i].id==id){
          for(let j=0;j<temp.length;j++){
            if(this.productsList[i].id==temp[j].id){
              if(temp[j].quatity<=0){
                temp.splice(j,1);
                console.log('Splice '+temp);
                this.cart = temp;
                this.cartService.cartList.next(this.cart);
              }else{
                temp[j].quatity=temp[j].quatity-1;
                this.productsList[i].stock++;
                // console.log(temp[j].price);
                // console.log(this.productsList[i].price);
                temp[j].price=temp[j].price-this.productsList[i].price;
                this.cart = temp;
                this.cartService.cartList.next(this.cart);
              }
            }
          }

          
        }
      }
      let c = this.cartService.getTotat();
      // console.log(c);
    }

    plusQuantity(id:number){
    let temp = new Array<CartData>();
    // console.log(id);
    temp = this.cart;
    // console.log(temp);
    for(let i=0;i<this.productsList.length;i++){
        if(this.productsList[i].id==id){
          for(let j=0;j<temp.length;j++){
            if(this.productsList[i].id==temp[j].id && (this.productsList[i].stock!=0)){
              // let c = this.getOriginalStock(id);
              // console.log(c);
                temp[j].quatity=temp[j].quatity+1;
                this.productsList[i].stock--;
                // console.log(temp[j].price);
                // console.log(this.productsList[i].price);
                temp[j].price=temp[j].price+this.productsList[i].price;
                this.cart = temp;
                this.cartService.cartList.next(this.cart);
            }
          }
        }
      }
      let c = this.cartService.getTotat();
      // console.log(c);
    }

    deleteQuantity(id:number){
      let temp = new Array<CartData>();
      // console.log(id);
      temp = this.cart;
      // console.log(temp);
      for(let i=0;i<this.productsList.length;i++){
        if(this.productsList[i].id==id){
          for(let j=0;j<temp.length;j++){
            if(this.productsList[i].id==temp[j].id){
              if(temp[j].quatity<=0){
                temp.splice(j,1);
                // console.log('Splice '+temp);
                this.cart = temp;
                this.cartService.cartList.next(this.cart);
              }else{
                this.productsList[i].stock = this.productsList[i].stock + temp[j].quatity;
                temp.splice(j,1);
                // console.log('Splice '+temp);
                this.cart = temp;
                this.cartService.cartList.next(this.cart);
              }
            }
          }
        }
      }
      let c = this.cartService.getTotat();
      // console.log(c);
    }

    getOriginalStock(id:number){
      for(let i=0;i<this.productsList.length;i++){
        if(this.productsList[i].id==id){
          if(this.productsList[i].stock<=0){
            return true;
          }else{
            return false;
          }
        }
      }
    }
}
