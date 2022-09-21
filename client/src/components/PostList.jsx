import { Grid } from "@mui/material";
import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
	return (
		<Grid container spacing={2}>
			{posts.map((post) => (
				<Post key={post._id} post={post} />
			))}
		</Grid>
	);
};

export default PostList;
