import { Collection } from "./models/Collection";
import {User, UserProps} from './models/User'
import { UserFrorm } from "./views/UserForm";

/*const collection = User.buildUserCollection();

collection.on('change', ()=>{
  console.log(collection.models);
});

collection.fetch();
*/
const user = User.buildUser({name: "Vitalik", age:33});
const form = new UserFrorm(document.getElementById('rootDiv') as Element, user);
form.render();
form.bindEvents(new DocumentFragment());