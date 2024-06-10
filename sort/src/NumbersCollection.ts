import { Sortable } from "./Sortable";
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor (public data: number[]){
    super();
  }

  //if you write get before you may not use () to get lenght (call it like property not like a method)
  get length():number{
    return this.data.length
  }

  swap(leftIndex: number, rightIndex:number){
    console.log(`swap ${this.data[leftIndex]} and ${this.data[rightIndex]}`);
    
    var tmp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = tmp;
  }

  compare(leftIndex: number, rightIndex: number):boolean{
    return this.data[leftIndex]> this.data[rightIndex];
  }
}