import countItems from '../utils/countItems';

const defaultState = {
	items: [],
	isCartOpen: false,
};

const ADD_ORDER = 'ADD_ORDER';
const REMOVE_ORDER_BY_ID = 'REMOVE_ORDER_BY_ID';
const SET_CART_OPEN = 'SET_CART_OPEN';

export default function ordersReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD_ORDER:
			return { ...state, items: countItems(state.items, action.payload) };
		case REMOVE_ORDER_BY_ID:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
		case SET_CART_OPEN:
			return { ...state, isCartOpen: action.payload };
	}
	return state;
}

export const addOrder = (item) => ({ type: ADD_ORDER, payload: item });
export const removeOrderById = (itemId) => ({
	type: REMOVE_ORDER_BY_ID,
	payload: itemId,
});
export const setCartOpen = (bool) => ({
	type: SET_CART_OPEN,
	payload: bool,
});
