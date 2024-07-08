export interface SarchRepoAction{
  type: ActionType.SEARCH_REPO;
}

export interface SearchRepoSuccessAction{
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}

export interface SearchRepoErrorAction{
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string;
}

export type Action = SearchRepoSuccessAction 
| SarchRepoAction 
| SearchRepoErrorAction;

export enum ActionType {
  SEARCH_REPO = 'search_repo',
  SEARCH_REPO_SUCCESS = 'search_repo_success',
  SEARCH_REPO_ERROR = 'search_repo_error'
}