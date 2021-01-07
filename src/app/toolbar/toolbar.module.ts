import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [MenubarComponent, CategoriesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenubarComponent, CategoriesComponent]
})
export class ToolbarModule { }
