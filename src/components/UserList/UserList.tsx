import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchUsers } from '../../store/ActionCreator/user';

const UserList: React.FC = () => {
	const { error, loading, users } = useTypeSelector(state => state.users);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchUsers() as any);
	}, []);
  console.log(users)
	return <div> </div>;
};
export default UserList;
