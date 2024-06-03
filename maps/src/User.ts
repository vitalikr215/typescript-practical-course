import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap"

export class User implements Mappable {
  name: string
  location : {
    lat: number,
    lon: number
  }

  constructor(){
    this.name = faker.name.fullName();
    this.location = {
      lat: parseFloat(faker.address.latitude(48.84,48.62)),
      lon: parseFloat(faker.address.longitude(33.78,31.01))
    }
  }

  info():void{
    console.log(`User: ${this.name} located in ${this.location.lat},${this.location.lon}`);
  }

  markerContent():string{
    return `${this.name}`;
  }
}

