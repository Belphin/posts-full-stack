import { ShoppingBasket } from '@mui/icons-material';
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import BasketItem from './BasketItem';
import countItems from './utils/countItems';

const Basket = ({ cartOpen, orders, removeFromOrder, closeCart }) => {
	return (
		<Drawer anchor="right" open={cartOpen} onClose={closeCart}>
			<List sx={{ width: '400px' }}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary="Корзина" />
				</ListItem>
				<Divider />

				{!orders.length ? (
					<ListItem>Корзина пуста!</ListItem>
				) : (
					orders.map((item) => <BasketItem key={item.id} item={item} />)
				)}
			</List>
		</Drawer>
	);
};

export default Basket;
