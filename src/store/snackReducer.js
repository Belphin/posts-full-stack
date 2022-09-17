const defaultState = {
	isOpen: false,
};

const SET_OPEN = 'SET_OPEN';

export default function snackReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_OPEN:
			return { ...state, isOpen: action.payload };
	}
	return state;
}

export const setOpen = (bool) => ({ type: SET_OPEN, payload: bool });
