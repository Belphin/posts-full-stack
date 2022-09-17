import { Grid } from '@mui/material';
import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
	return (
		<Grid container spacing={2}>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</Grid>
	);
};

export default ProductList;
