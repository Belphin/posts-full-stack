import { Container, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './actions/products';
import Basket from './components/Basket';
import Header from './components/Header';
import Loader from './components/Loader/Loader';
import ProductList from './components/ProductList';
import Search from './components/Search';
import Snack from './components/Snack';
import useDebounce from './hooks/useDebounce';
import { setCurrentPage } from './store/productsReducer';
import countOrders from './utils/countOrders';

function App() {
	const dispatch = useDispatch();
	const debouncedSearch = useDebounce(search, 1000);
	const products = useSelector((state) => state.products.items);
	const limit = useSelector((state) => state.products.limit);
	const currentPage = useSelector((state) => state.products.currentPage);
	const isLoading = useSelector((state) => state.products.isLoading);
	const totalCount = useSelector((state) => state.products.totalCount);
	const error = useSelector((state) => state.products.error);
	const orders = useSelector((state) => state.orders.items);
	const [searchValue, setSearchValue] = useState('');

	const [isCartOpen, setCartOpen] = useState(false);

	const pagesCount = Math.ceil(totalCount / limit);

	const isSnackOpen = useSelector((state) => state.snack.isOpen);

	useEffect(() => {
		dispatch(getProducts(searchValue, currentPage, limit));
	}, [currentPage]);

	const handleChange = (event, value) => {
		dispatch(setCurrentPage(value));
	};

	function search(searchValue) {
		dispatch(setCurrentPage(1));
		dispatch(getProducts(searchValue, currentPage, limit));
	}

	return (
		<>
			<Header
				orderLen={countOrders(orders)}
				opentCart={() => setCartOpen(true)}
			/>
			<Container sx={{ mt: 1 }}>
				<Pagination
					count={pagesCount}
					color="primary"
					page={currentPage}
					onChange={handleChange}
				/>
				<Search
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
						debouncedSearch(e.target.value);
					}}
				/>
				{isLoading ? (
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Loader />
					</div>
				) : (
					<ProductList products={products} error={error} />
				)}
			</Container>
			<Basket
				dispatch={dispatch}
				orders={orders}
				cartOpen={isCartOpen}
				closeCart={() => setCartOpen(false)}
			/>
			<Snack isOpen={isSnackOpen} />
		</>
	);
}

export default App;
