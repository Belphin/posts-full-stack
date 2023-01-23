import React from "react";
import PostItem from "../components/PostItem";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";

const PostsList = () => {
	const { data, error, isLoading } = postAPI.useFetchAllPostsQuery({
		limit: 9,
		page: 1,
	});
	const [deletePost] = postAPI.useDeletePostMutation();
	const [createPost] = postAPI.useCreatePostMutation();

	const handleRemove = (post: IPost) => {
		deletePost(post);
	};
	const handleCreate = async () => {
		const title = prompt();
		await createPost({ title, body: title } as IPost);
	};

	return (
		<div>
			<button onClick={handleCreate}>Create Post</button>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error</div>}
			{data?.posts.map((post) => (
				<PostItem key={post._id} post={post} remove={handleRemove} />
			))}
		</div>
	);
};

export default PostsList;
