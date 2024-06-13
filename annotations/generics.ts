class ArrayOfAnything<T>{
  constructor(public collection: T[]){
  }

  get(index: number):T{
    return this.collection[index]
  }
}

const numbers = new ArrayOfAnything<number>([1,3,4]);
console.log(numbers.get(1));

const strings = new ArrayOfAnything<string>(['ruka','noga','ushi']);
//if to write const strings = new ArrayOfAnything(['ruka','noga','ushi']);
// TS also will do types inference and correctly pass right type
console.log(numbers.get(1));

//generic in functions
function printAnything<T>(arr:T[]) {
  for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
}
printAnything(['x','y','zz']);

//generic constraints
//we going to call one method from different classes within one function
class Car implements Printable {
  print():void{
    console.log('I am a Car');
    
  }
}

class House implements Printable {
  print():void{
    console.log('I am a House');    
  }
}

interface Printable{
  print():void;
}

function printCarOrHouse<T extends Printable>(arr: T[]){
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printCarOrHouse([new House(), new House(), new Car()]);