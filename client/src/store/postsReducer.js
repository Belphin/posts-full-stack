const defaultState = {
	items: [],
	isLoading: false,
	error: "",
	page: 1,
	limit: 12,
};

export const SET_POSTS = "SET_POSTS";
export const ADD_POST = "ADD_POST";
export const SET_ERROR = "SET_ERROR";
export const SET_LOADING = "SET_LOADING";
export const DELETE_POST = "DELETE_POST";
export const SET_PAGE = "SET_PAGE";

export default function postsReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_POSTS:
			return { ...state, items: action.payload };
		case ADD_POST:
			return { ...state, items: [...state.items, action.payload] };
		case SET_ERROR:
			return { ...state, error: action.payload };
		case SET_LOADING:
			return { ...state, isLoading: action.payload };
		case DELETE_POST:
			return {
				...state,
				items: state.items.filter((item) => item._id !== action.payload),
			};
		case SET_PAGE:
			return { ...state, page: action.payload };
	}
	return state;
}

export const setPosts = (items) => ({ type: SET_POSTS, payload: items });
export const addPost = (item) => ({ type: ADD_POST, payload: item });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
export const setLoading = (bool) => ({ type: SET_LOADING, payload: bool });
export const deletePost = (id) => ({ type: DELETE_POST, payload: id });
export const setPage = (page) => ({ type: SET_PAGE, payload: page });
