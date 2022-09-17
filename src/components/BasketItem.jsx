import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeOrderById } from '../store/ordersReducer';

const BasketItem = ({ item, onClick }) => {
	const dispatch = useDispatch();
	return (
		<ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
			<Typography variant="body1">
				{item.amount} {item.title}
			</Typography>
			<IconButton onClick={onClick}>
				<Close />
			</IconButton>
		</ListItem>
	);
};

export default BasketItem;
