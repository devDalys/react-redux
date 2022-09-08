import { Alert, AlertTitle, LinearProgress } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchUsers } from '../../store/ActionCreator/user';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UserList: React.FC = () => {
	const { error, loading, users } = useTypeSelector(state => state.users);
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchUsers() as any);
	}, []);
	console.log(users)
	return (
		<div>
			{loading && <LinearProgress />}
			{error && (
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					{error}
				</Alert>
			)}
			{
				 <TableContainer component={Paper}>
				 <Table sx={{ minWidth: 650 }} aria-label="simple table">
					 <TableHead>
						 <TableRow>
							 <TableCell>Fullname</TableCell>
							 <TableCell align="right">Email</TableCell>
							 <TableCell align="right">ID</TableCell>
							 <TableCell align="right">Username</TableCell>
							 <TableCell align="right">Website</TableCell>
						 </TableRow>
					 </TableHead>
					 <TableBody>
						 {users.map((user) => (
							 <TableRow
								 key={user.name}
								 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							 >
								 <TableCell component="th" scope="row">
									 {user.email}
								 </TableCell>
								 <TableCell align="right">{user.id}</TableCell>
								 <TableCell align="right">{user.phone}</TableCell>
								 <TableCell align="right">{user.username}</TableCell>
								 <TableCell align="right">{user.website}</TableCell>
							 </TableRow>
						 ))}
					 </TableBody>
				 </Table>
			 </TableContainer>
			}
		</div>
	);
};
export default UserList;
