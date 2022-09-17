import {
	setError,
	setLoading,
	setProducts,
	setTotalCount,
} from '../store/productsReducer';
import axios from 'axios';

export const getProducts = (searchQuery = '', currentPage, limit) => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/photos${
					searchQuery ? '' : `?_limit=${limit}&_page=${currentPage}`
				}`
			);
			if (searchQuery) {
				const searchedData = response.data.filter((item) =>
					item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
				);
				dispatch(setTotalCount(1));
				dispatch(setProducts(searchedData));
			} else {
				dispatch(setTotalCount(response.headers['x-total-count']));
				dispatch(setProducts(response.data));
			}
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
};
