import React from "react";
import { useState, useRef, useEffect } from "react";

const users = [
  {name: 'Evlampiy', age:56},
  {name: 'Dormidont', age: 31},
  {name: 'Sarah', age:20}
];

const UserSearch: React.FC = ()=>{
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>()
  const inputRef = useRef<HTMLInputElement | null>(null);

  //and here we are making focused element with ref attribute
  useEffect(()=>{
    if (!inputRef.current){
      return;
    }
    inputRef.current.focus();
  });

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
   /*we are using ref here to get user name input which we'll focus further*/
  return(
    <div>
      <h3>User search</h3>
     
      <input ref={inputRef} value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={onClick}>Find User</button>
        {searchResult}
    </div>
  )
};

export default UserSearch;