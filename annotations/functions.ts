//functino annotation (we are annotating both arguments and return value)
const add = (a : number,b: number) : number =>{
  return a+b;
};

//the same for named function
function divide (a: number, b:number) : number{
  return a/b;
}
//and for anonymous function
const multiply = function(a: number, b: number){
  return a*b;
}

//if need to indicate that the value never been return (not have reachable point)
//for example when throwing exception
const throwErr = (message : string): never => {
  throw new Error(message);
}

//desctructuring annotaion
const todayWeather = {
  date: new Date(),
  weather: "sunny"
}
//{date, weather} - this is descructor
const logWeather = ({date, weather}: {date: Date, weather: string})=>{
  console.log(date);
  console.log(weather); 
}

logWeather(todayWeather);