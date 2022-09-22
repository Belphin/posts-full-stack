import { Grid } from "@mui/material";
import React, { memo } from "react";
import Post from "./Post";
import ErrorAlert from "./UI/ErrorAlert";
import InfoAlert from "./UI/InfoAlert";
import Loader from "./UI/Loader/Loader";

const PostList = memo(({ error, dispatch, posts, isLoading, updatePosts }) => {
	if (error) return <ErrorAlert error={error} />;

	if (isLoading) return <Loader />;

	if (!isLoading && !posts.length)
		return <InfoAlert>Posts not found!</InfoAlert>;

	return (
		<>
			<Grid container spacing={2}>
				{posts.map((post) => (
					<Post
						key={post._id}
						post={post}
						dispatch={dispatch}
						updatePosts={updatePosts}
					/>
				))}
			</Grid>
		</>
	);
});

export default PostList;
