import { Action, ActionType } from "../actions";

export interface RepositoriesState{
  loading: boolean;
  error: string|null;
  data: string[]
  
}

const reducer = (state:RepositoriesState, action:Action):RepositoriesState=>{
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, error: null, data:[]};
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload};
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, error: action.payload, data: []};
    default:
      return state;
  }

};

export default reducer;