import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";

const PostPage = () => {
	const route = useNavigate();
	const { id } = useParams();
	const { data: post, error, isLoading } = postAPI.useFetchOnePostQuery(id);
	const [updataPost] = postAPI.useUpdatePostMutation();

	const handleUpdate = async () => {
		const title = prompt();
		await updataPost({ _id: id, title, body: title } as IPost);
	};

	return (
		<div>
			<button onClick={() => route("/")}>Back</button>
			<h3>{post?._id}</h3>
			<h1>{post?.title + " " + post?.body}</h1>
			<button onClick={handleUpdate}>UPDATE</button>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error</div>}
		</div>
	);
};

export default PostPage;
