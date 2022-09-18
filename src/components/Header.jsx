import { ShoppingBasket } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen } from '../store/ordersReducer';
import countOrders from '../utils/countOrders';

const Header = () => {
	const dispatch = useDispatch();
	const orders = useSelector((state) => state.orders.items);
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
					MUI Shop
				</Typography>
				<IconButton color="inherit" onClick={() => dispatch(setCartOpen(true))}>
					<Badge color="secondary" badgeContent={countOrders(orders)}>
						<ShoppingBasket />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
