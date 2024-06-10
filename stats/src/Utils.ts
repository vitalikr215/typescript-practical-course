export const dateStringToData = (dateString: string) :Date =>{
  const dateArray = dateString.split('/').map((value: string): number=>{
    return parseInt(value);
  });
  return new Date(dateArray[2]
  , dateArray[1]-1
  , dateArray[0]);
}