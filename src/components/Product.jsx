import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../store/ordersReducer';
import { setOpen } from '../store/snackReducer';

const Product = memo(({ product }) => {
	const dispatch = useDispatch();

	const onBuy = () => {
		dispatch(addOrder(product));
		dispatch(setOpen(true));
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
					<Button variant="contained" color="success" onClick={onBuy}>
						Add to cart
					</Button>
					<Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>
						View
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
});

export default Product;
