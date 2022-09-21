import {
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
	Button,
} from "@mui/material";
import React from "react";

const Post = ({ post }) => {
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
				</CardActions>
			</Card>
		</Grid>
	);
};

export default Post;
