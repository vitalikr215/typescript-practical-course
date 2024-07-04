import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './props/Parent';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App =()=>{
  return (
    <div>
      <h1>Hi there !</h1>
    </div>
  );
};

root.render(
    <Parent />
);

