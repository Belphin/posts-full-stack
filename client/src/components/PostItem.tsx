import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../models/IPost";

interface PostItemProps {
	post: IPost;
	remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove }) => {
	const route = useNavigate();
	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation();
		remove(post);
	};

	return (
		<div style={{ display: "flex" }}>
			<h1>{post.title}</h1>
			<button onClick={handleRemove}>DELETE</button>
			<button onClick={() => route("/posts/" + post._id)}>LEARN MORE</button>
		</div>
	);
};

export default PostItem;
