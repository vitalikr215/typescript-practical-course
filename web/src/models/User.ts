import { Attributes } from './Attributes';
import { Eventing, Callback } from './Eventing';
import { Sync } from './Sync';

export interface UserProps{
  //optional properties
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User{
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  attributes: Attributes<UserProps>;

  constructor(public data: UserProps){
    this.attributes = new Attributes<UserProps>(this.data);
  }

  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  get get(){
    return this.attributes.get;
  }
}