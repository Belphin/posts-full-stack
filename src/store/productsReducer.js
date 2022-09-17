const defaultState = {
	items: [],
};

const SET_PRODUCTS = 'SET_PRODUCTS';

export default function productsReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_PRODUCTS:
			return { ...state, items: action.payload };
	}
	return state;
}

export const setProducts = (items) => ({ type: SET_PRODUCTS, payload: items });
