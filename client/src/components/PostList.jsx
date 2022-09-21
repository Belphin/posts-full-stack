import { Grid } from "@mui/material";
import React, { memo } from "react";
import Post from "./Post";
import Loader from "./UI/Loader/Loader";

const PostList = memo(({ posts, isLoading }) => {
	return (
		<>
			<Grid container spacing={2}>
				{posts.map((post) => (
					<Post key={post._id} post={post} />
				))}
			</Grid>
			{isLoading && <Loader />}
		</>
	);
});

export default PostList;
