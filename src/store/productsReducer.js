const defaultState = {
	items: [],
	isLoading: true,
	currentPage: 1,
	limit: 12,
	totalCount: 0,
	error: '',
};

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LOADING = 'SET_LOADING';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_ERROR = 'SET_ERROR';

export default function productsReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_PRODUCTS:
			return { ...state, items: action.payload };
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.payload };
		case SET_LOADING:
			return { ...state, isLoading: action.payload };
		case SET_TOTAL_COUNT:
			return { ...state, totalCount: action.payload };
		case SET_ERROR:
			return { ...state, error: action.payload };
	}
	return state;
}

export const setProducts = (items) => ({ type: SET_PRODUCTS, payload: items });
export const setCurrentPage = (page) => ({
	type: SET_CURRENT_PAGE,
	payload: page,
});
export const setLoading = (bool) => ({
	type: SET_LOADING,
	payload: bool,
});
export const setTotalCount = (value) => ({
	type: SET_TOTAL_COUNT,
	payload: value,
});
export const setError = (error) => ({
	type: SET_ERROR,
	payload: error,
});
