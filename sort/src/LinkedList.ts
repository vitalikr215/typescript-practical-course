import { Sortable } from "./Sortable";

export class LinkedList implements Sortable{
  head: Node | null = null;

  add(value: number): void{
    const node = new Node(value);
    //if the list empty and head pointing to null
    //set new item as a head
    if (!this.head){
      console.log(`Add first item ${value}`);
      
      this.head = node;
      return;
    }

    //if we have something in the list - add to the tail
    let tail = this.head;
    while (tail.next){
      //moving to the tail
      tail = tail.next;
    }
    //adding new node to the tail
    console.log(`add next item ${value}`);
    
    tail.next = node;
  }
  
  get length(): number {
    if (!this.head){
      return 0;
    }

    let len = 1;
    let tail = this.head
    while (tail.next){
      tail = tail.next
      len++;
    }
    return len;
  }

  at(index: number) : Node{
    if (!this.head){
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node : Node | null = this.head;
    while (node) {
      if (counter==index){
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }
  
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head){
      return false;
    }
    console.log(`compare ${this.at(leftIndex).data} with ${this.at(rightIndex).data}`);
    
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    //we are not going to swap nodes itself, we'll just swap their values
    console.log();
    
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    
    console.log(`swap ${leftNode.data} with ${leftNode.data}`);
    const tmp = leftNode;
    leftNode.data = rightNode.data;
    rightNode.data = tmp.data;
  }

  print():void{
    if (!this.head){
      return;
    }
    let listString = ''
    
    let node : Node | null = this.head;
    while (node) {
      listString+= `${node?.data}->`;
      node = node.next;
    }
    console.log(listString);
    
  }
}

class Node{
  next: Node | null =null;
  constructor(public data: number){

  }
}