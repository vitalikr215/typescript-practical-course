import { CsvFileReader } from "./CsvFileReader"; 

const reader = new CsvFileReader('football.csv');
reader.read();
console.log(reader.data[0]);