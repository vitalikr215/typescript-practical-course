import { Collection } from "./models/Collection";
import {User, UserProps} from './models/User'
import { UserEdit } from "./views/UserEdit";
import { UserForm } from "./views/UserForm";
import { UserList } from "./views/UserList";
import { UserShow } from "./views/UserShow";

/*const collection = User.buildUserCollection();

collection.on('change', ()=>{
  console.log(collection.models);
});

collection.fetch();*/

const rootElement = document.getElementById('rootDiv') as Element;
/*const user = User.buildUser({name: "Vitalik", age:33});
const userEdit = new UserEdit(rootElement, user);
userEdit.render();*/

const usersCollection = User.buildUserCollection();



usersCollection.on('change', ()=>{
  new UserList(rootElement, usersCollection).render();
})

usersCollection.fetch();

/*const form = new UserForm(document.getElementById('rootDiv') as Element, user);
form.render();
form.bindEvents(new DocumentFragment());*/