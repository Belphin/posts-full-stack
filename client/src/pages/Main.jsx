import { Container } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "../components/PostList";
import { asyncSetPosts } from "../store/postsReducer";

const Main = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts.items);
	useEffect(() => {
		dispatch(asyncSetPosts());
	}, []);

	return (
		<Container sx={{ mt: 2 }}>
			<PostList posts={posts} />
		</Container>
	);
};

export default Main;
