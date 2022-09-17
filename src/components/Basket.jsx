import { Cancel, ShoppingBasket } from '@mui/icons-material';
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { memo } from 'react';
import { removeOrderById } from '../store/ordersReducer';
import BasketItem from './BasketItem';

const Basket = ({ dispatch, cartOpen, orders, closeCart }) => {
	return (
		<Drawer anchor="right" open={cartOpen} onClose={closeCart}>
			<List sx={{ width: '400px' }}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary="Basket" />
					<ListItemIcon
						onClick={closeCart}
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							cursor: 'pointer',
						}}>
						<Cancel />
					</ListItemIcon>
				</ListItem>
				<Divider />

				{!orders.length ? (
					<ListItem>Basket is empty</ListItem>
				) : (
					orders.map((item) => (
						<BasketItem
							key={item.id}
							item={item}
							onClick={() => dispatch(removeOrderById(item.id))}
						/>
					))
				)}
			</List>
		</Drawer>
	);
};

export default Basket;
