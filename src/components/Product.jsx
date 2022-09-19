import {
	Badge,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../store/ordersReducer';
import { setOpen } from '../store/snackReducer';

const Product = memo(({ product }) => {
	const dispatch = useDispatch();
	const items = useSelector((state) => state.orders.items);
	const [count, setCount] = useState();

	const onBuy = () => {
		dispatch(addOrder(product));
		dispatch(setOpen(true));
		setTimeout(() => dispatch(setOpen(false)), 3000);
	};

	useEffect(() => {
		const order = items.find((order) => order.id === product.id);
		setCount(order ? order.amount : 0);
	}, [items]);

	return (
		<Grid item xs={12} sm={6} md={4} xl={3}>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
				<Typography variant="p" component="h3" className="ProductId">
					id: {product.id}
				</Typography>
				<CardMedia
					image={product.thumbnailUrl}
					component="img"
					alt=""
					title={product.title}
					sx={{ height: 140 }}
				/>
				<CardContent>
					<Typography variant="h6" component="h3">
						{product.title}
					</Typography>
				</CardContent>
				<CardActions>
					<Badge color="secondary" badgeContent={count}>
						<Button variant="contained" color="success" onClick={onBuy}>
							Buy
						</Button>
					</Badge>
					<Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>
						View
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
});

export default Product;
