import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basket from './components/Basket';
import Header from './components/Header';
import PhotoList from './components/ProductList';
import Search from './components/Search';
import Snack from './components/Snack';
import countOrders from './components/utils/countOrders';
import useFetching from './hooks/useFetching';
import { setProducts } from './store/productsReducer';

function App() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.items);
	const [fetching, loading, error] = useFetching(async () => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=1'
		);
		dispatch(setProducts(response.data));
	});
	const orders = useSelector((state) => state.orders.items);
	const [isCartOpen, setCartOpen] = useState(false);
	const [isSnackOpen, setSnackOpen] = useState(false);

	useEffect(() => {
		fetching();
	}, []);

	// когда добавляем в корзину
	// setSnackOpen(true);

	return (
		<>
			<Header
				orderLen={countOrders(orders)}
				opentCart={() => setCartOpen(true)}
			/>
			<Container sx={{ mt: 1 }}>
				<Search />
				<PhotoList products={products} />
			</Container>
			<Basket
				orders={orders}
				cartOpen={isCartOpen}
				closeCart={() => setCartOpen(false)}
			/>
			<Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
		</>
	);
}

export default App;
