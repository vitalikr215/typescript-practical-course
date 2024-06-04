//to run solution use 2 terminals, for re-compile and for watch on files change
// npm start
// npm run dev

class Sorter{
  constructor (public collection: number[] | string){

  }

  sort():void{
    const length = this.collection.length
    
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length-i; j++) {
        //this part only works when we sorting number[]
        //we are checking this
        if (this.collection instanceof Array){
          //inside this if we could access all members of number[]
          if (this.collection[j]>this.collection[j+1])
          {
            var tmp = this.collection[j];
            this.collection[j]= this.collection[j+1];
            this.collection[j+1]=tmp;
          }
        }
        
        //to check collection is a string we are using another approach
        if (typeof this.collection === "string"){
          //inside this if we could access all members of string
        }

        //outside this above if's we could access to only members of collection
        //which are common to string and number[]
      } 
    }
    console.log(this.collection);
  }
}
const nums:number[] = [0, 10, -1, 5];

console.log(`Before sorting: ${nums}`);
 
const sorter = new Sorter(nums);
sorter.sort();



