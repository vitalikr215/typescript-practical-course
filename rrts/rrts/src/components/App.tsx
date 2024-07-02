import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import {StoreState} from '../reducers'

interface AppProps{
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState{
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState>{
  constructor(props: AppProps){
    super(props);
    this.state = {fetching: false};
  }

  componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any): void {
    if (!prevProps.todos.length && this.props.todos.length){
      this.setState({fetching: false});
    }
  }
  
  onFetchClick = ()=>{
    this.props.fetchTodos();
    this.state = {fetching: true};
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList():JSX.Element[]{
    return this.props.todos.map((todo: Todo)=>{
      return (
      <div onClick={()=> this.onTodoClick(todo.id)} style={{ color: 'blue', borderStyle : 'solid', borderColor: 'red' }} key={todo.id}>
        {todo.title}
      </div>)
    });
  }

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.onFetchClick}>Fetch</button>
        {this.state.fetching ? 'LOADING...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateProps = (state:StoreState):{ todos: Todo[]} =>{
  return {todos: state.todos}
};

export const App = connect(
  mapStateProps,
  { fetchTodos, deleteTodo }
)(_App);