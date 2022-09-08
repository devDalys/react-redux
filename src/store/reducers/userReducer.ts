import { UserState, UsersAction, action } from "../../types/userTypes"


const initialState:UserState = {
  users: [],
  loading: false,
  error: null
}


export const userReducer = (state = initialState,action:action):UserState => {
  switch(action.type){
    case UsersAction.FETCH_USERS:
      return {loading: true, error: null, users: []}
      case UsersAction.FETCH_USERS_SUCCESS:
      return {loading: false, error: null, users: action.payload}
      case UsersAction.FETCH_USERS_ERROR:
      return {loading: false, error: action.payload, users: []}
      default: return state
  }
}