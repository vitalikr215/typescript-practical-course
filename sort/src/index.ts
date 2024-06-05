//to run solution use 2 terminals, for re-compile and for watch on files change
// npm start
// npm run dev
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

/*
const nums = new NumbersCollection([10, 3, -5, 0]);
const chars = new CharactersCollection ('aXaab');

console.log(`Before sorting: ${nums.data}`);
console.log(`Before sorting: ${chars.data}`);

const sorter = new Sorter(nums);
sorter.sort();

console.log (`After sorting: ${nums.data}`);

const sorter2 = new Sorter(chars);
sorter2.sort();
console.log (`After sorting: ${chars.data}`);
*/
console.log("Linked list");
const list = new LinkedList();
list.add(2);
list.add(1);
list.add(-5);
list.print();

const sorter3 = new Sorter(list);
sorter3.sort();
list.print();

 
