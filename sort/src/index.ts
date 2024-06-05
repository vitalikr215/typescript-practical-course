//to run solution use 2 terminals, for re-compile and for watch on files change
// npm start
// npm run dev
import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

//const nums:number[] = [0, 10, -1, 5];
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

