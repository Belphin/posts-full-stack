import { Grid } from '@mui/material';
import React, { memo } from 'react';
import AlertError from './AlertError';
import Product from './Product';

const ProductList = memo(({ products, error }) => {
	if (error) return <AlertError>{error}</AlertError>;

	return (
		<Grid container spacing={2}>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</Grid>
	);
});

export default ProductList;
