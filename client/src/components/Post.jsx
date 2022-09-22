import {
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import React, { memo } from "react";
import { deletePostById } from "../asyncActions/Posts";

const Post = memo(({ post, dispatch, updatePosts }) => {
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
						{post.body.length > 40 ? post.body.slice(0, 40) + "..." : post.body}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">Learn More</Button>
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
