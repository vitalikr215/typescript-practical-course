import 'reflect-metadata';

const plane = {
  color: 'red'
};

//adding metadata key note with value hi (it's somekind of hidden property)
Reflect.defineMetadata('note', 'hi', plane);

//to get metadata
console.log(Reflect.getMetadata('note',plane));

//adding metadata to property of object
Reflect.defineMetadata('metadata',100, plane, 'color');


@printMetadata2
class Plane {
  color: string = 'red';
  
  @markFunction
  fly():void{
    console.log('vrrrr');
  }
}

function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret',123, target, key);
}

//print out specific metadata key
function printMetadata(field: string){
  return function(target: typeof Plane){
    for (let key in target.prototype) {
      console.log(key);
      console.log(`${key}:${Reflect.getMetadata(field,target.prototype, key)}`);
    }
  }
}

function printMetadata2(target: typeof Plane){
  console.log(target.prototype);
  
    for (let key in target.prototype) {
      console.log(key);
      console.log(`${key}:${Reflect.getMetadata('secret',target.prototype, key)}`);
    }
  
}


//to get metadata of class memeber use class prototype
console.log(Reflect.getMetadata('secret', Plane.prototype, 'fly'));
