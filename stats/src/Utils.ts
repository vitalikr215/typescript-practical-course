import { MatchResult } from "./MatchResult";
export const dateStringToData = (dateString: string) :Date =>{
  const dateArray = dateString.split('/').map((value: string): number=>{
    return parseInt(value);
  });
  return new Date(dateArray[2]
  , dateArray[1]-1
  , dateArray[0]);
}

export type MatchData = [Date, string, string, number, number, MatchResult, string];