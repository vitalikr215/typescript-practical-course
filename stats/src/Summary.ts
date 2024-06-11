import { WinAnalysis } from "./Analizers/WinAnalisis";
import { HtmlReport } from "./OutputTargets/HtmlReport";
import { MatchData } from "./Utils";

export interface Analyzer{
  reportType: string;
  run(matchData: MatchData[]): string;
}

export interface OutputTarget{
  print(report: string, reporType? : string): void
}

export class Summary{

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){

  }

  static winsAnalisisWithTeamReport(team: string) : Summary{
    return new Summary(new WinAnalysis(team),
      new HtmlReport());
  }

  buildAndPrintReport(matchData: MatchData[]): void{
    let result = this.analyzer.run(matchData);
    this.outputTarget.print(result, this.analyzer.reportType);
  };
}