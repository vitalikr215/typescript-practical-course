class Boat{
  color: string = 'red';

  @logError1('oops ! boat was sunk')
  pilot():void{
    throw new Error();
    console.log('swish');
  }

  get formatteColor(): string{
    return `this boat is ${this.color}`;
  }
}

//first argumet is an object prototype
//second is member where we apply decorator
//third - describes if the member writebale enumerable configurable
//Decorated it's just a function that called before creating member of a class
//we can't read property of a class instance
//Decorators executed before we've created an instance
function logError(target: any, key: string, desc: PropertyDescriptor):void{
  const method = desc.value; //in our case pilot()
  
  //call new function instead of pilot (in our case just properly handle error
  //in call function)
  desc.value = function(){
    try {
      method();
    } catch (error) {
      console.log('Boat was sunk');
    }
  }
}

//decorator factory. Here we are able to pass arguments to decorator
function logError1(errorMessage: string){
  return function(target: any, key: string, desc: PropertyDescriptor){
    const method = desc.value; //in our case pilot()
    
    //call new function instead of pilot (in our case just properly handle error
    //in call function)
    desc.value = function(){
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    }
  }
}

const boat = new Boat();
boat.pilot();