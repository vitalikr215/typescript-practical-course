import { MatchReader } from "./Inheritance/MatchReader";

const matchReader = new MatchReader('football.csv');
matchReader.read();

console.log(matchReader.data[1]);
