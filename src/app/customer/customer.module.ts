import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../services/services.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ CartComponent, ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    RouterModule,
    ServicesModule
  ],
  exports:[
    CartComponent, ProductsComponent
  ]
})
export class CustomerModule { }
