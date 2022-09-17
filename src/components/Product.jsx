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

const Product = ({ product }) => {
	const dispatch = useDispatch();
	return (
		<Grid item xs={12} sm={4} md={3}>
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
					<Button
						variant="contained"
						onClick={() => dispatch(addOrder(product))}>
						Buy
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Product;
