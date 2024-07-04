import React from "react";

interface ChildProps{
  color : string;
  onClick: ()=>void;
}

//using this approach TS don't know that Child is a React component and
//has all properties that React component has
export const Child = (props: ChildProps)=>{
  return(<div>
    Child component with props.color = {props.color})
      <button onClick={props.onClick}>Click me !</button>
    </div>)
}

//here we expolicitly say that it's a component and what and now it has
//all React component properties
export const ChildAsFunctionComponent: React.FC<ChildProps> = (props)=>{
  return  (<div>
      Child component as React component with props.color = {props.color}
        <button onClick={props.onClick}>Click me !</button>
      </div>)
}