import { CsvFileReader } from "./CsvFileReader";
import { MatchData, dateStringToData} from "./Utils";
import { MatchResult } from "./MatchResult";
import { DataReader } from "./DataReader";

export class MatchReader {
  data: MatchData[]=[];

  constructor(public reader: DataReader){
  }
  
  static fromCsv(filename: string): MatchReader{
    return new MatchReader(new CsvFileReader(filename));
  }

  load():void{
    this.reader.read();
    this.data = this.reader.data.map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToData(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}