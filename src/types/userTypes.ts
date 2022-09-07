
export interface UserState{
  users: any[];
  loading: boolean;
  error: null | string
}

export enum UsersAction {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETSH_USERS_ERROR',
}

export interface action {
  type: string;
  payload?: any;
}

interface FetchUsersAction{
  type: UsersAction.FETCH_USERS;
}

interface FetchUsersSuccessAction{
  type: UsersAction.FETCH_USERS_SUCCESS;
  payload: any[];
}

export interface FetchUsersErrorAction{
  type: UsersAction.FETCH_USERS_ERROR;
  payload: string; 
}

export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction;
