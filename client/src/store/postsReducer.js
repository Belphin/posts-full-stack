const defaultState = {
	items: [],
	page: 1,
	limit: 12,
};

export const SET_POSTS = "SET_POSTS";
export const ASYNC_SET_POSTS = "ASYNC_SET_POSTS";

export default function postsReducer(state = defaultState, action) {
	switch (action.type) {
		case SET_POSTS:
			return { ...state, items: action.payload };
	}
	return state;
}

export const setPosts = (items) => ({ type: SET_POSTS, payload: items });
export const asyncSetPosts = () => ({
	type: ASYNC_SET_POSTS,
});
