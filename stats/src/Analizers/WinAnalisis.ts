import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";
import { MatchData } from "../Utils";

export class  WinAnalysis implements Analyzer {
  reportType: string;

  constructor(public team: string){
    this.reportType = "Win analysis statistic"
  }

  run(matchData: MatchData[]): string {
    let wins = 0;
    for (let match of matchData){
      if (match[1]===this.team && match[5] == MatchResult.HomeWin){
        wins++
      }
      else if (match[2]=== this.team && match[5] == MatchResult.AwayWin){
        wins++
      }
    }
    return `${this.team} wins ${wins} time(s)`;
  }

}