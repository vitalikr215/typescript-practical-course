import { User } from "./models/User";

const user = new User({id:1, name: 'Vitalik'});//new User({name: 'Evlampiy', age: 12});
//to create a user without initial values new User({})
user.save();