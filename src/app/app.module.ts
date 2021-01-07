import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ViewsModule } from './views/views.module';
import { FormspageModule } from './formspage/formspage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerModule } from './customer/customer.module';
import { ServicesModule } from './services/services.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { UpdateModule } from './update/update.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToolbarModule,
    ViewsModule,
    FormspageModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerModule,
    ServicesModule,
    UpdateModule,
    AdminModule,
    NgxWebstorageModule.forRoot({ prefix: 'mobistore', separator: '.', caseSensitive:false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
