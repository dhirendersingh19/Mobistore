import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { LocalComponent } from './local/local.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ServerComponent, LocalComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class UserlistModule { }
