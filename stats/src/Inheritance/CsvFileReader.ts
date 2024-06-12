import fs from 'fs'
import { MatchData } from '../Utils';

export abstract class CsvFileReader<T> {
  constructor(public fileName:string){
    this.data = [];
  }
  data : T[];
  
  read():void{
    this.data = fs
      .readFileSync(this.fileName, {encoding:'utf-8'})
      .split('\n')
      .map((row:string):string[]=>{
        return row.split(',');
      })
      .map(this.mapRow)
  }

  abstract mapRow(row:string[]) : T
}