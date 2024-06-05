import { Sortable } from "./Sortable";

export class CharactersCollection implements Sortable{
  constructor(public data: string){

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