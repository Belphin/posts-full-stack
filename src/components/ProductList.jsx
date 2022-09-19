import { Alert, AlertTitle, Grid } from '@mui/material';
import React, { memo } from 'react';
import Loader from './UI/Loader/Loader';
import Product from './Product';

const ProductList = memo(({ isLoadingPage, isLoading, products, error }) => {
	if (error)
		return (
			<Alert severity="error">
				<AlertTitle>Error</AlertTitle>
				{error.name + ': '}
				<strong>{error.message}</strong>
			</Alert>
		);

	if (isLoadingPage) return <Loader />;

	if (products.length === 0 && !isLoading)
		return <Alert severity="info">Product not found</Alert>;

	return (
		<Grid container spacing={2}>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
			{isLoading && <Loader />}
		</Grid>
	);
});

export default ProductList;
