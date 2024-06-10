//to run solution use 2 terminals, for re-compile and for watch on files change
// npm start
// npm run dev
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const nums = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection ('aXaab');

console.log(`Before sorting: ${nums.data}`);
console.log(`Before sorting: ${chars.data}`);

//using abstract class allow us to do so (use sort functionality from base class
//but use swap and comparing from inherited classes)
nums.sort();
console.log (`After sorting: ${nums.data}`);
chars.sort();
console.log (`After sorting: ${chars.data}`);

console.log("Linked list");
const list = new LinkedList();
list.add(2);
list.add(1);
list.add(-5);
list.add(70);
list.add(0);
list.print();
list.sort();

list.print();

 
