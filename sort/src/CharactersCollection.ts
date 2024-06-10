import { Sortable } from "./Sortable";
import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
  constructor(public data: string){
    super();
  }

  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }
  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    var tmp = this.data[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = tmp;
    this.data = characters.join('');
  }

}