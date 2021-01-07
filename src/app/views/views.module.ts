import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesModule } from '../services/services.module';
import { FormsModule } from '@angular/forms';
import { UpdateModule } from '../update/update.module';
import { UserdetailsComponent } from './userdetails/userdetails.component';



@NgModule({
  declarations: [AllproductsComponent, HeaderComponent, FooterComponent, HomeComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    ServicesModule,
    FormsModule,
    UpdateModule
  ],
  exports: [
    HomeComponent,
    FooterComponent
  ]
})
export class ViewsModule { }
