import axios from "axios";
import { setError, setLoading, setPosts } from "../store/postsReducer";

export const getPostsPage = (page, limit) => {
	return async function (dispatch) {
		try {
			dispatch(setLoading(true));
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

export const createPost = (postValue) => {
	return async function (dispatch) {
		try {
			const responce = await axios.post(
				"http://localhost:5000/api/posts",
				postValue
			);
		} catch (error) {
			dispatch(setError(error));
		}
	};
};
