import { MatchData, dateStringToData } from "../Utils";
import { MatchResult } from "../MatchResult";
import { CsvFileReader } from "./CsvFileReader";

export class MatchReader extends CsvFileReader<MatchData>{
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