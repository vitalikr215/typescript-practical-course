import React from "react";
import { useState } from "react";
import { serialize } from "v8";

const users = [
  {name: 'Evlampiy', age:56},
  {name: 'Dormidont', age: 31},
  {name: 'Sarah', age:20}
];

const UserSearch: React.FC = ()=>{
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>()

  const onClick = ()=>{
    const foundUser = users.find((user)=>{return user.name === name});
    setUser(foundUser);
  }

  let searchResult;
  if (user){
    searchResult = <div>Name: {user.name} <br/>Age: {user.age}</div>;
  }
  else{
    searchResult = <div>Not found</div> ;
  }
  return(
    <div>
      <h3>User search</h3>
      <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={onClick}>Find User</button>
        {searchResult}
    </div>
  )
};

export default UserSearch;