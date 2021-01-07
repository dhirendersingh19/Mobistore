import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-updatevalue',
  templateUrl: './updatevalue.component.html',
  styleUrls: ['./updatevalue.component.css']
})
export class UpdatevalueComponent implements OnInit {

  @Input()
  value:number; 

  constructor() { }

  @Output()
  updatevalue = new EventEmitter<number>();
  
  ngOnInit(): void {
  }

  updateValues(){
    this.updatevalue.emit(this.value);
  }

}
