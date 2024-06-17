import { User, UserProps } from "./models/User";
import { Attributes } from "./models/Attributes";

const user = new User({id:1});
user.on('change',()=>{
  console.log("User was changed");
  console.log(user);
});

//user.set({id:1, name:"Vitalik", age: 53});
user.fetch();
user.set({age:53});
user.save();
user.fetch();
//console.log(user.get('name')+ ' '+ user.get('age'));