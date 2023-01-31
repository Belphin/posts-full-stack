import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../models/IPost";
import {
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import { postAPI } from "../services/PostService";

interface PostItemProps {
	post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	const route = useNavigate();

	const [deletePost] = postAPI.useDeletePostMutation();

	const handleRemove = (post: IPost) => {
		deletePost(post);
	};

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
					<Button size="small" onClick={() => route(`/posts/${post._id}`)}>
						Learn More
					</Button>
					<Button size="small" color="error" onClick={() => handleRemove(post)}>
						Delete
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default PostItem;
