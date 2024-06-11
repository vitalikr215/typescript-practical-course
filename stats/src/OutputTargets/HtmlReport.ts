import { OutputTarget } from "../Summary";
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string, reporType?: string | undefined): void {
    const html =`
    <div>
      <h1>Analysis output: ${reporType}</h1>
      <div style="color:blue">${report}</div>
    </dv>
    `
    fs.writeFileSync("report.html", html);
  }
}