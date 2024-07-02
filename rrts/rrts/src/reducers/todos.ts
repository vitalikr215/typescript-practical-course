import { Todo } from "../actions"
import { ActionTypes, TodoAction } from "../actions/types";


export const todosReducer = (state: Todo[]=[], action: TodoAction)=>{
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      //here we show only todos which id not equal to deleted todo
      return state.filter((todo:Todo)=>todo.id !== action.payload);
    default:
      return state;
  }
}