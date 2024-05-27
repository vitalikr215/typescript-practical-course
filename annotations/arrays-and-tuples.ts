const carMakers: string[] = ['ford', 'daewoo', 'nissan'];

//help with map (shows what correct params should we pass)
carMakers.map((car: string): string=>{
  console.log(car.toUpperCase());
  return car.toUpperCase();  
})

//Flexible types
const improtantDates: (Date| string)[] = [new Date(), '2030-05-27'];

//tuples - array-like structure where elements of array are the properties of
//an object
const pepsi = ['brown', true, 40];
//TS-way to create tuples
const pepsi1: [string, boolean, number] = ['brown', true, 40];
//you could create pre-defined tuple type
type Drink = [string, boolean, number];
const pepsi2: Drink = ['brown', true, 40];