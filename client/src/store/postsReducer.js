const defaultState = {
	items: [],
	isLoading: false,
	error: "",
	page: 1,
	limit: 12,
};

export const SET_POSTS = "SET_POSTS";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";

export default function postsReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_POSTS:
			return { ...state, items: action.payload };
		case SET_ERROR:
			return { ...state, error: action.payload };
		case SET_LOADING:
			return { ...state, isLoading: action.payload };
	}
	return state;
}

export const setPosts = (items) => ({ type: SET_POSTS, payload: items });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
export const setLoading = (bool) => ({ type: SET_LOADING, payload: bool });
