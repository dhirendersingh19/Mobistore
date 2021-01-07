import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { ServicesModule } from '../services/services.module';



@NgModule({
  declarations: [InventoryComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    RouterModule,
    ServicesModule
  ],
  exports:[]
})
export class AdminModule { }
