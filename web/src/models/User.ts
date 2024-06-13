import { Eventing } from './Eventing';
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
}