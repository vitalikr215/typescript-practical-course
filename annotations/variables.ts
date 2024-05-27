//syntax of explicit setting type of variable of primitive types
const apple: number = 5;

//syntax of explicit setting type built in objectsS
let now: Date = new Date();

//array (need to specify type of array elements)
let colors: string[] = ["Red", "Green", "Blue"];

//classes
class MyClass {
  //data : number
};

let myCls = new MyClass();
///myCls.data = 13;

//Object literal (when you define obect structure on fly)
let point : {x: number; y: number} = {
  x : 10,
  y : 20
};

//function type annotation, there we need to specify argument and return
//value of a function (arguments)=>return-value
let logNumber: (i: number) => void = (i: number)=>{
  console.log(i);
}; 

//when to use type annotaions
//1) when function returns any
const json = '{"x": 10, "y": 20}';
const coord = JSON.parse(json); // this will return any
const coord1: {x: number; y: number} = JSON.parse(json); //this will return know type
console.log(coord1);

//2) When we init variable in another line then declare
let words = ['red', 'green', 'blue'];
let found : boolean; //setup type explicitly

for (let i = 0; i < words.length; i++) {
  if (words[i]==='green'){
    found = true; //because otherwise here TS won't know what type found has here
  }
}

//3) variable whose type can't be inferred corectly
let nums = [-10,-1, 12];
let numsAbove0 :boolean | number = false; //if variable could be of several types

for (let i = 0; i < nums.length; i++) {
  if (nums[i]<0){
    numsAbove0 = nums[i]; //we could init with boolean or number
  }
  
}