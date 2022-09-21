import axios from "axios";
import { put, takeEvery, select } from "redux-saga/effects";
import { ASYNC_SET_POSTS, setPosts } from "../store/postsReducer";

function* setPostsWorker() {
	const page = yield select((state) => state.posts.page);
	const limit = yield select((state) => state.posts.limit);

	const posts = yield axios.get(
		`http://localhost:5000/api/posts/${limit}/${page}`
	);
	yield put(setPosts(posts.data));
}

export function* postsWatcher() {
	yield takeEvery(ASYNC_SET_POSTS, setPostsWorker);
}
