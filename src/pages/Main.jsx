import { Container, Pagination } from '@mui/material';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Basket from '../components/Basket';
import ProductList from '../components/ProductList';
import Snack from '../components/UI/Snack';
import useDebounce from '../hooks/useDebounce';
import { setCurrentPage } from '../store/productsReducer';
import {
	addProductsPage,
	getProducts,
	getSearchedProducts,
} from '../actions/products';
import { setCartOpen } from '../store/ordersReducer';
import Search from '../components/Search';
import useScroll from '../hooks/useScroll';
import ToUpArrow from '../components/ToUpArrow';
import { setOpen } from '../store/snackReducer';

const Main = memo(() => {
	const dispatch = useDispatch();
	const debouncedSearch = useDebounce(search, 1000);
	const products = useSelector((state) => state.products.items);
	const limit = useSelector((state) => state.products.limit);
	const currentPage = useSelector((state) => state.products.currentPage);
	const isLoading = useSelector((state) => state.products.isLoading);
	const isLoadingPage = useSelector((state) => state.products.isLoadingPage);
	const totalCount = useSelector((state) => state.products.totalCount);
	const error = useSelector((state) => state.products.error);
	const orders = useSelector((state) => state.orders.items);
	const isCartOpen = useSelector((state) => state.orders.isCartOpen);
	const [searchValue, setSearchValue] = useState('');
	const [isToTopArrow, setToTopArrow] = useState(false);

	const pagesCount = Math.ceil(totalCount / limit);

	const isSnackOpen = useSelector((state) => state.snack.isOpen);

	const lastElement = useRef();
	const intersecting = useScroll(
		lastElement,
		currentPage < pagesCount && products.length && !isLoadingPage && !isLoading,
		() => {
			console.log(1);
			dispatch(addProductsPage(currentPage + 1, limit));
			dispatch(setCurrentPage(currentPage + 1));
		}
	);

	const top = useRef();
	const toTopArrowObserver = useScroll(
		top,
		true,
		() => setToTopArrow(false),
		() => setTimeout(() => setToTopArrow(true), 5000)
	);

	const handleChange = (event, value = 1) => {
		dispatch(setCurrentPage(value));
		dispatch(getProducts(value, limit));
	};

	useEffect(() => {
		handleChange();
	}, []);

	function search(searchValue) {
		dispatch(setCurrentPage(1));
		if (searchValue) {
			dispatch(getSearchedProducts(searchValue));
		} else {
			dispatch(getProducts(currentPage, limit));
		}
	}

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		dispatch(setOpen(false));
	};

	return (
		<>
			<Container sx={{ mt: 1 }}>
				<Pagination
					id="Pagination"
					ref={top}
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
				<ProductList
					isLoadingPage={isLoadingPage}
					isLoading={isLoading}
					products={products}
					error={error}
				/>
				<div ref={lastElement} />
				{isToTopArrow && <ToUpArrow />}
			</Container>
			<Basket
				dispatch={dispatch}
				orders={orders}
				cartOpen={isCartOpen}
				closeCart={() => dispatch(setCartOpen(false))}
			/>
			<Snack handleClose={handleClose} isOpen={isSnackOpen}>
				Product added to cart!
			</Snack>
		</>
	);
});

export default Main;
