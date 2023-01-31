import { Grid } from "@mui/material";
import React from "react";
import { IPost } from "../models/IPost";
import PostItem from "./PostItem";

interface PostListProps {
	posts: IPost[];
}

const PostList = (props: PostListProps) => {
	return (
		<Grid container spacing={2}>
			{props.posts.map((post) => (
				<PostItem key={post._id} post={post} />
			))}
		</Grid>
	);
};

export default PostList;
