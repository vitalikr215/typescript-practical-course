import React from "react";
import { useState } from "react";

const GuestList: React.FC = ()=>{
  const [name, setName] = useState('');
  //here we have to explicitly tell useState what type of array we are using
  const [guests, setGuests] =useState<string[]>([]);
  
  const onClick = ()=>{
    setName('');
    //adding name to existing array of strings
    setGuests([...guests, name]);
  };

  const guestsList = guests.map((guest)=> <li>{guest}</li>);
  
  return (
    <div>
      <h1>Guest List:</h1>
      <ul>
        {guestsList}
      </ul>
      <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={onClick}>Add Guest</button>
    </div>
  )
};

export default GuestList;