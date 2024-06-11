import fs from 'fs';
import { MatchResult } from './MatchResult';
import {dateStringToData} from './Utils'
import { DataReader } from './DataReader';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader implements DataReader{
  constructor(public fileName:string){
    this.data = [];
  }
  data : string[][];
  
  read():void{
    this.data = fs
      .readFileSync(this.fileName, {encoding:'utf-8'})
      .split('\n')
      .map((row:string):string[]=>{
        return row.split(',');
      })
  }
}