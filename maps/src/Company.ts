import { faker } from "@faker-js/faker"
import { Mappable } from "./CustomMap"

export class Company implements Mappable{
  companyName: string
  catchPhrase: string
  location : {
    lat: number,
    lon: number
  }

  info():void{
    console.log(`Company: ${this.companyName}, ${this.catchPhrase} located: 
    ${this.location.lat}, ${this.location.lon}`);
  }

  constructor(){
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude(48.84,48.62)),
      lon: parseFloat(faker.address.longitude(33.78,31.01)) 
    }
  }

  markerContent():string{
    return `<div>
    <h1>${this.companyName}</h1>
    <h3>${this.catchPhrase}</h3>        
    </div>`;
  }
}