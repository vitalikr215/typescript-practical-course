import { faker } from "@faker-js/faker"

export class Company{
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
}