import {
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { deletePostById } from "../asyncActions/Posts";

const Post = memo(({ post, dispatch, updatePosts }) => {
	const route = useNavigate();
	return (
		<Grid item xs={12} md={6} lg={4}>
			<Card
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}>
				<CardContent>
					<Typography variant="h6" component="h1">
						{post.title}
					</Typography>
					<Typography>
						{post.body.length > 35 ? post.body.slice(0, 35) + "..." : post.body}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={() => route(`/post/${post._id}`)}>
						Learn More
					</Button>
					<Button
						size="small"
						color="error"
						onClick={async () => {
							await dispatch(deletePostById(post._id));
							updatePosts();
						}}>
						Delete
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
});

export default Post;
