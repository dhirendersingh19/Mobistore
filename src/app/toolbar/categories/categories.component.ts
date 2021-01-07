import { Component, OnInit } from '@angular/core';
import { CategorydataserviceService } from 'src/app/services/categoryservice/categorydataservice.service';
import { Products } from 'src/app/services/productdata/product';
import { ProductdataserviceService } from 'src/app/services/productdata/productdataservice.service';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  productsList:Array<Products>;
  lowth:Array<Products>;
  hightl:Array<Products>;
  instocks:Array<Products>;


  isAdmin:boolean;
  isLoggedIn:boolean;
  isCurrentUserName:string;
  isEdit:boolean;


  constructor(private productsservice:ProductdataserviceService, private product:CategorydataserviceService, private checkservice:CheckserviceService) { 
    this.productsList = new Array<Products>();
    this.productsList = this.productsservice.getProducts();
    // console.log(this.productsList);
    this.product.setProducts(this.productsList);


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

  ngOnInit(): void {
   
  }

  giveEdit(){
    this.checkservice.setEdit(true);
  }

  takeEdit(){
    this.checkservice.setEdit(false);
  }

  allproducts(){
    this.productsList = new Array<Products>();
    for(let i=0;i<this.productsservice.getProducts().length;i++){
      this.productsList.push(this.productsservice.getByid(i));
    }

    // console.log(this.productsList);
    this.product.setProducts(this.productsList);
  }

  lowtohigh(){
    this.lowth = new Array<Products>();
    for(let i=0;i<this.productsservice.getProducts().length;i++){
      this.lowth.push(this.productsservice.getByid(i));
    }
    // console.log(this.lowth);
    for(let i=0;i<this.lowth.length-1;i++){
      for(let j=0;j<this.lowth.length-i-1;j++){
        if(this.lowth[j].price>this.lowth[j+1].price){
          let temp: Products;
          temp = this.lowth[j];
          this.lowth[j]=this.lowth[j+1];
          this.lowth[j+1]=temp;
        }
      }
    }
    // console.log(this.lowth);
    this.product.setProducts(this.lowth);
  }

  hightolow(){
    this.hightl = new Array<Products>();
    for(let i=0;i<this.productsservice.getProducts().length;i++){
      this.hightl.push(this.productsservice.getByid(i));
    }
    // console.log(this.hightl);
    for(let i=0;i<this.hightl.length-1;i++){
      for(let j=0;j<this.hightl.length-i-1;j++){
        if(this.hightl[j].price<this.hightl[j+1].price){
          let temp: Products;
          temp = this.hightl[j];
          this.hightl[j]=this.hightl[j+1];
          this.hightl[j+1]=temp;
        }
      }
    }
    // console.log(this.hightl);
    this.product.setProducts(this.hightl);
  }

  instock(){
    this.instocks = new Array<Products>();

    for(let i=0;i<this.productsservice.getProducts().length;i++){
      if(this.productsservice.getByid(i).stock>0){
        this.instocks.push(this.productsservice.getByid(i));
      }
    }
    // console.log('instock-->'+this.instocks);

    for(let i=0;i<this.instocks.length-1;i++){
      for(let j=0;j<this.instocks.length-i-1;j++){
        if(this.instocks[j].stock>this.instocks[j+1].stock){
          let temp: Products;
          temp = this.instocks[j];
          this.instocks[j]=this.instocks[j+1];
          this.instocks[j+1]=temp;

        }
      }
    }
    // console.log(this.instocks);
    if(this.instocks!=null){
      if(this.instocks.length>0){
        this.product.setProducts(this.instocks);
      }else{
        this.product.setProducts(null);
      }
    }
    

  }


}
