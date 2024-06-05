import { Sortable } from './Sortable';

export class Sorter{
  constructor (public collection: Sortable){

  }

  sort():void{
    //const length = this.collection.length;
    const { length } = this.collection;
    
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        if (this.collection.compare(j,j+1)){
          this.collection.swap(j,j+1);
        }
      } 
    }
  }
}