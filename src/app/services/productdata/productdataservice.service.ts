import { Injectable } from '@angular/core';
import { Products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductdataserviceService {

 productsList:Array<Products>;

  constructor() {
    this.productsList = new Array<Products>();
    let sp1 = new Products(101,"Samsung Galaxy S10","assets/images/products/Samsung Galaxy S10.jpeg",
    12,6.1,"16MP + 12MP | 10MP Front Camera",
    3400,"Exynos 9 9820 Processor",61900,6);
    let sp2 = new Products(102,"Mi 10","assets/images/products/Mi 10.jpeg",
    64,6.67,"108MP + 13MP + 2MP + 2MP | 20MP Front Camera",
    4780,"Qualcomm Snapdragon 865 Processor",54999,2);
    let sp3 = new Products(103,"Samsung Galaxy Note 10 Plus","assets/images/products/Samsung Galaxy Note 10 Plus.jpeg",
    12,6.8,"12MP (Dual Aperture) + 12MP + 16MP + TOF | 10MP Front Camera",
    4300,"Exynos 9 9810 Processor",85000,10);
    let sp4 = new Products(104,"OPPO Find X","assets/images/products/OPPO Find X.jpeg",
    8,6.4,"16MP + 20MP | 25MP Front Camera",
    3730,"Snapdragon 845 Octa Core 2.649 GHz Processor",60990,0);
    let sp5 = new Products(105,"LG V40 ThinQ","assets/images/products/LG V40 ThinQ.jpeg",
    6,6.4,"16MP + 12MP | 8MP + 5MP Dual Front Camera",
    3300,"Qualcomm Snapdragon 845 Processor",60000,3);
    let sp6 = new Products(106,"Huawei P30 Pro","assets/images/products/Huawei P30 Pro.jpeg",
    8,6.47,"40MP + 20MP + 8MP",
    4200,"Huawei HiSilicon KIRIN 980",59690,7);
    this.productsList.push(sp1);
    this.productsList.push(sp2);
    this.productsList.push(sp3);
    this.productsList.push(sp4);
    this.productsList.push(sp5);
    this.productsList.push(sp6);

   }

   getProducts(){
     return this.productsList;
   }

   getByid(index:number){
     return this.productsList[index];
   }
}
