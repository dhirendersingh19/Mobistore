import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartData } from 'src/app/customer/cart/cartdata';
import { CartdataserviceService } from 'src/app/services/cartservice/cartdataservice.service';
import { CategorydataserviceService } from 'src/app/services/categoryservice/categorydataservice.service';
import { Products } from 'src/app/services/productdata/product';
import { ProductdataserviceService } from 'src/app/services/productdata/productdataservice.service';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  productsList:Array<Products>;

  isAdmin:boolean;
  isLoggedIn:boolean;
  isCurrentUserName:string;
  isEdit:boolean;
  nullProductList:boolean = false;

  constructor( private product:CategorydataserviceService, private router:Router,private cartservice:CartdataserviceService, private checkservice:CheckserviceService, private item:ProductdataserviceService) { 
    this.product.getProducts().subscribe(data => {
      if(data!=null){
        this.productsList = data;
        this.nullProductList = false;
      }else{
        this.nullProductList = true;
      }
    })
  }

  ngOnInit(): void {
    this.checkservice.getAdminStatus().subscribe(status => {
      this.isAdmin = status;
    })
    this.checkservice.getLoggedInStatus().subscribe(status => {
      this.isLoggedIn = status;
    })
    this.checkservice.getCurrentUser().subscribe(status => {
      this.isCurrentUserName = status;
    })
    this.checkservice.getEdit().subscribe(status => {
      this.isEdit = status;
    })

  }

  delete(pid:number): void{
    for(var index = 0; index <this.item.productsList.length; index++){
      if(this.item.productsList[index].id == pid){
        this.item.productsList.splice(index,1);
      }
    }
      this.productsList = this.item.productsList;
  }

  SetnewStock(newStock:number,id:number){
    // console.log(newStock);
    for(var index = 0; index <this.productsList.length; index++){
      if(this.productsList[index].id == id)
        this.productsList[index].stock = newStock;
      }
  }

  SetnewPrice(newPrice:number,id:number){
    for(var index = 0; index <this.productsList.length; index++){
      if(this.productsList[index].id == id)
        this.productsList[index].price = newPrice;
      }
  }

  addToCart(id:number){
    if(this.isLoggedIn){
      for(var index = 0; index <this.productsList.length; index++){
      if(this.productsList[index].id == id){
        let temp = new CartData(this.productsList[index].id,this.productsList[index].name,this.productsList[index].imgPath,this.productsList[index].price);
        this.productsList[index].stock=this.productsList[index].stock-1;
        // this.cartservice.setCarttoLocal(temp, this.productsList[index].price);
        this.cartservice.setCart(temp, this.productsList[index].price);
      }
    }
    }else{
      alert('User not Logged in');
      this.router.navigateByUrl('login');
    } 
  }

    getStock(id:number){
    for(var index = 0; index <this.productsList.length; index++){
      if(this.productsList[index].id == id)
        if(this.productsList[index].stock<1){
          return true;
        }
        else{
          return false;
        }
      }
    }

}
