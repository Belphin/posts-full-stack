import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../store/ordersReducer';
import { setOpen } from '../store/snackReducer';

const Product = ({ product }) => {
	const dispatch = useDispatch();

	const onBuy = () => {
		dispatch(addOrder(product));
		dispatch(setOpen(true));
		setTimeout(() => dispatch(setOpen(false)), 3000);
	};

	return (
		<Grid item xs={12} sm={6} md={4} xl={3}>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
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
					<Button variant="contained" onClick={onBuy}>
						Buy
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Product;
