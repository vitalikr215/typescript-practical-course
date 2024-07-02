import { DeleteTodoAction, FetchTodosAction } from ".";

export enum ActionTypes{
  FETCH_TODOS,
  DELETE_TODO
}

export type TodoAction = FetchTodosAction | DeleteTodoAction