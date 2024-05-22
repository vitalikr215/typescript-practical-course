import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/users/1";

interface User {
  id: number;
  username: string;
  email: string;
};

axios.get(url).then( res =>{
  const user = res.data as User;
  logUser(user.id, user.username, user.email);  
});

const logUser = (id : number, username: string, email :string)=>{
  console.log(`User ${id}
  Named ${username}
  Has ${email} email`);
};
