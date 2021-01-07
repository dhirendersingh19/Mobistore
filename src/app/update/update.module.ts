import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdatevalueComponent } from './updatevalue/updatevalue.component';



@NgModule({
  declarations: [UpdatevalueComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[UpdatevalueComponent]
})
export class UpdateModule { }
