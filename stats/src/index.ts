import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv') 
matchReader.load();

/*const summary = new Summary(
  new WinAnalysis('Liverpool'),
  new HtmlReport());*/

//same as previous but shorter
const summary = Summary.winsAnalisisWithTeamReport('Wolves');
summary.buildAndPrintReport(matchReader.data);

console.log(matchReader.data[0]);