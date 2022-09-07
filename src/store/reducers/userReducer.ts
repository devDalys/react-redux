const FETSH_USERS = 'FETCH_USERS';
const FETSH_USERS_SUCCES = 'FETCH_USERS';
const FETSH_USERS = 'FETCH_USERS';

interface UserState{
  users: any[];
  loading: boolean;
  error: null | string
}

const initialState:UserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState,action):UserState => {
  switch(action.type){
    case 'FETCH_USERS':
      return {loading: true, error: null, users: []}
  }
}