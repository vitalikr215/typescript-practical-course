import { User, UserProps } from "./models/User";
import { Attributes } from "./models/Attributes";

const user = new User({id:1, name:"Vitalik", age:12});
user.get("age")