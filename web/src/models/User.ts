import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

export interface UserProps{
  //optional properties
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps>{
 static buildUser(attr: UserProps):User{
  return new User(
    new Attributes<UserProps>(attr),
    new ApiSync<UserProps>(rootUrl),
    new Eventing()
  );
 }

 static buildUserCollection(): Collection<User, UserProps>{
  return new Collection<User, UserProps>(
    'http://localhost:3000/users',
    (json: UserProps)=> User.buildUser(json));
  }

  setRandomAge():void{
    const age = Math.round(Math.random()*100);
    this.set({age: age});
  }
}