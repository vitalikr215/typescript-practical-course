import React, { ReactElement, ReactNode } from "react";
import ReactDOM  from "react-dom";
import {createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/App";
import { reducers } from "./reducers";

//first examplse of using react with TS
interface AppProps{
  color: string;
}

interface AppState{
  counter: number;
}
/*
class App extends React.Component<AppProps, AppState>{
  constructor(props: AppProps){
    super(props);
    this.state = { counter: 0};
  }

  onIncrement = ():void=>{
    this.setState({ counter:this.state.counter + 1});
  }
  
  onDecrement = ():void=>{
    this.setState({ counter:this.state.counter - 1});
  }

  render(): ReactNode {
    return (
      <div>
        <div>Hi There ! The color props is: {this.props.color}</div>
        <div>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
          {this.state.counter}
        </div>
      </div>
    );
  }
}*/

//example of functional component
const App1 = (props: AppProps): ReactElement=>{
  return <div>This is functional component retured props: {props.color}</div>
}

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('#root'));