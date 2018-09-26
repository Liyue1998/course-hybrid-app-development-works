import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Input} from '@angular/core'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }
  @Input() arr:string[];
  @Input() arr1:string[];
  @Output() delIndex=new EventEmitter();
  @Output() changeIndex=new EventEmitter();

  del(i){  //从未完成到已完成抛出下标
    this.delIndex.emit(i);
  }
  delete(n){  //从已经完成回到未完成抛出下标
    this.changeIndex.emit(n);
  }
  deletelist(idx){
    this.arr.splice(idx,1);
  }
  deletelist1(idx){
    this.arr1.splice(idx,1);
  }

  ngOnInit() {
  }

}
