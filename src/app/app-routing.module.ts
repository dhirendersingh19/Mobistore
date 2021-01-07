import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './admin/inventory/inventory.component';
import { LocalComponent } from './admin/userlist/local/local.component';
import { ServerComponent } from './admin/userlist/server/server.component';
import { UserlistModule } from './admin/userlist/userlist.module';
import { CartComponent } from './customer/cart/cart.component';
import { ProductsComponent } from './customer/products/products.component';

import { LoginComponent } from './formspage/login/login.component';
import { SignupComponent } from './formspage/signup/signup.component';
import { CartGuard } from './guard/cartguard/cart.guard';
import { InventoryGuard } from './guard/inventoryguard/inventory.guard';
import { LocallistGuard } from './guard/locallistguard/locallist.guard';
import { ServerlistGuard } from './guard/serverlistguard/serverlist.guard';
import { AllproductsComponent } from './views/allproducts/allproducts.component';
import { HomeComponent } from './views/home/home.component';
import { UserdetailsComponent } from './views/userdetails/userdetails.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'products',
    component: ProductsComponent,
    children:[
      {
        path:'allproducts',
        component: AllproductsComponent
      },
      {
        path:'',
        redirectTo:'home',

        pathMatch:'full'
      },
      {
        path:"**",
        redirectTo:'allproducts',
        pathMatch:'full'
      }
    ]
  },{
    path:'cart',
    component: CartComponent,
    canActivate: [CartGuard]
  },{
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [InventoryGuard],
    children:[
      {
        path:'allproducts',
        component: AllproductsComponent
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:"**",
        redirectTo:'allproducts',
        pathMatch:'full'
      }
    ]
  },{
      path:'server',
      component: ServerComponent,
      canActivate: [ServerlistGuard],
      children:[
        {
          path: 'details/:id',
          component: UserdetailsComponent
        }
      ]
  },{
      path: 'local',
      component: LocalComponent,
      canActivate: [LocallistGuard],
      children: [
        {
          path: 'details/:id',
          component: UserdetailsComponent
        }
      ]
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:"**",
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
