import axios from "axios";
import {
	addPost,
	deletePost,
	setError,
	setLoading,
	setPost,
	setPosts,
} from "../store/postsReducer";

export const getPostsPage = (page, limit) => {
	return async function (dispatch) {
		dispatch(setLoading(true));
		try {
			const responce = await axios.get(
				`http://localhost:5000/api/posts/${limit}/${page}`
			);
			dispatch(setPosts(responce.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export const getPost = (id) => {
	return async function (dispatch) {
		dispatch(setLoading(true));
		try {
			const responce = await axios.get(`http://localhost:5000/api/posts/${id}`);
			dispatch(setPost(responce.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export const createPost = (postValue) => {
	return async function (dispatch) {
		try {
			const responce = await axios.post(
				"http://localhost:5000/api/posts",
				postValue
			);
			dispatch(addPost(responce.data));
		} catch (error) {
			dispatch(setError(error));
		}
	};
};

export const deletePostById = (id) => {
	return async function (dispatch) {
		try {
			const responce = await axios.delete(
				`http://localhost:5000/api/posts/${id}`
			);
			dispatch(deletePost(responce.data._id));
		} catch (error) {
			dispatch(setError(error));
		}
	};
};

export const updatePost = (post) => {
	return async function (dispatch) {
		dispatch(setLoading(true));
		try {
			const responce = await axios.put("http://localhost:5000/api/posts", post);
			dispatch(setPost(responce.data));
		} catch (error) {
			dispatch(setError(error));
		} finally {
			dispatch(setLoading(false));
		}
	};
};

export const searchPost = (title) => {
	console.log(title);
	if (!title) return getPostsPage(1, 12);
	return async function (dispatch) {
		dispatch(setLoading(true));
		const responce = await axios.get(`http://localhost:5000/api/post/${title}`);
		dispatch(setPosts(responce.data));
		dispatch(setLoading(false));
	};
};
