import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../productdata/product';

@Injectable({
  providedIn: 'root'
})
export class CategorydataserviceService {

  products = new BehaviorSubject<Products[]>(null);
  constructor() { }

  setProducts(product:Products[]){
    this.products.next(product);
  }

  getProducts(){
    return this.products.asObservable();
  }
}
