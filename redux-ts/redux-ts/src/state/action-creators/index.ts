import axios from "axios";
import { Action, ActionType, SearchRepoSuccessAction } from "../actions";
import { Dispatch } from "redux";

const url = 'https://registry.npmjs.org/-/v1/search?text='

export const searchRepositories = (searhTerm: string)=>{
  return async (dispatch: Dispatch<Action>) =>{
    dispatch({
      type: ActionType.SEARCH_REPO     
    });

    try {
      const {data} = await axios.get(url+searhTerm);

      const names = data.objects.map((result:any) => {
        return `${result.package.name}:${result.package.version}`;
      });

      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names     
      });
    } 
    catch (error) {
      if (error instanceof Error){
        dispatch({
          type: ActionType.SEARCH_REPO_ERROR,
          payload: error.message
        });
      }
    }
  };
};