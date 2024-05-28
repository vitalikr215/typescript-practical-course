class Vehicle {
  color:string = 'white'//set initial value of class field

  //there only 1 constructor can be
  constructor(color: string){
    this.color = color;
  }

  //shortcut for setting field in constructor and declare in also
  //constructor (public color: string){
  // this will create a field color and init it
  //}

  protected drive ():void{
    console.log("Drive");
  }

  protected honk ():void{
    console.log("Beep");
  }
}

//how to do inheritance in TSs
class Car extends Vehicle{
  
  constructor(){
    super('white');//you have to call constructor of a base class
  }
  
  //overriding in TS
  protected drive(): void {
    console.log("Car::Drive");
  }

  startDrivingProcess(): void{
    this.honk();
    this.drive();
  }
}

const c = new Car();
c.color = 'black';
c.startDrivingProcess();
console.log(c.color);
