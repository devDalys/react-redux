import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UsersAction } from '../../types/userTypes';

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UsersAction.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({type: UsersAction.FETCH_USERS_SUCCESS, payload: response.data})
		} catch (e) {
			dispatch({ type: UsersAction.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке пользователей' });
		}
	};
};
