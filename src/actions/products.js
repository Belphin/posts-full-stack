import {
	addProducts,
	setError,
	setLoading,
	setProducts,
	setTotalCount,
} from '../store/productsReducer';
import axios from 'axios';

export const getProducts = (currentPage, limit) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${currentPage}`
			);
			dispatch(setTotalCount(response.headers['x-total-count']));
			dispatch(setProducts(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export const getSearchedProducts = (searchQuery) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/photos/`
			);
			const searchedData = response.data.filter((item) =>
				item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
			);
			dispatch(setTotalCount(1));
			dispatch(setProducts(searchedData));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export const addProductsPage = (currentPage, limit) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${currentPage}`
			);
			dispatch(setTotalCount(response.headers['x-total-count']));
			dispatch(addProducts(response.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
};
