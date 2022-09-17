import countItems from '../components/utils/countItems';

const defaultState = {
	items: [],
};

const ADD_ORDER = 'ADD_ORDER';
const REMOVE_ORDER_BY_ID = 'REMOVE_ORDER_BY_ID';

export default function ordersReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD_ORDER:
			return { ...state, items: countItems(state.items, action.payload) };
		case REMOVE_ORDER_BY_ID:
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
	}
	return state;
}

export const addOrder = (item) => ({ type: ADD_ORDER, payload: item });
export const removeOrderById = (itemId) => ({
	type: REMOVE_ORDER_BY_ID,
	payload: itemId,
});
