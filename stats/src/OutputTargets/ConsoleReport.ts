import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget{
  print(report: string, reporType?: string | undefined): void {
   console.log(report); 
  }
}