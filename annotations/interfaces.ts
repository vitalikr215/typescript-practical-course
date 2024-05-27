interface Reportable{
  summary () : string //means a function that returns string
};

const printSummary = (vehicle: Reportable)=>{
  console.log(vehicle.summary()); 
}

const oldCivic  = {
  name : "civic",
  year : 2000,
  broken : true,
  summary ():string{
    return `Name:${this.name}\nYear:${this.year}\nBroken ? ${this.broken}`;//`Name:${this.name}`;//\nYear:${this.year}\nBroken ? ${this.broken}`;
  } 
}

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary ():string{
    return `My drink has ${this.sugar}g of sugar`;
  }
}

printSummary(oldCivic);
printSummary(drink);